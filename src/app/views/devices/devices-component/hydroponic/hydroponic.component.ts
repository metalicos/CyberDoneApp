import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, OperatorFunction, Subscription} from 'rxjs';
import {HydroponicControlService} from '../../../../services/hydroponic-control.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {TIME_ZONE_MAP} from '../../time-zone-map';
import {DeviceMetadataDto, DeviceMetadataService} from '../../../../services/device-metadata.service';
import {DeviceScheduleService} from '../../../../services/device-schedule.service';
import {HydroponicDataDto, HydroponicDataService} from '../../../../services/hydroponic-data.service';
import {HydroponicSettingsDto, HydroponicSettingsService} from '../../../../services/hydroponic-settings.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hydroponic-device',
  templateUrl: './hydroponic.component.html',
  styleUrls: ['./hydroponic.component.css']
})
export class HydroponicComponent implements OnDestroy, OnInit {
  subscriptionMap = new Map<string, Subscription>();
  @Input() metadata: DeviceMetadataDto;
  hydroData: HydroponicDataDto;
  hydroSett: HydroponicSettingsDto;
  updateInfoTimer: any;

  constructor(private deviceService: HydroponicControlService,
              private deviceSchedule: DeviceScheduleService,
              private deviceMetadataService: DeviceMetadataService,
              private hydroDataService: HydroponicDataService,
              private hydroSettService: HydroponicSettingsService) {
  }

  ngOnInit(): void {
    this.updateInfoTimer = setInterval(() => {
      this.updateInfoFromServer();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptionMap.forEach(sub => {
      if (sub !== null) {
        sub.unsubscribe();
      }
    });
    clearInterval(this.updateInfoTimer);
  }

  private updateInfoFromServer() {
    this.subscriptionMap.set('GetHydroponicLastDataRequest',
      this.hydroDataService.getLastDataInDeviceWithUUID(this.metadata.uuid, 0, 1)
        .subscribe(
          hydroponicData => {
            this.hydroData = hydroponicData[0];
          },
          err => {
            console.log('Data receive error');
            console.log(JSON.stringify(err));
            this.subscriptionMap.get('GetHydroponicLastDataRequest').unsubscribe();
          }));
    this.subscriptionMap.set('GetHydroponicLastSettingsRequest',
      this.hydroSettService.getLastSettingsInDeviceWithUUID(this.metadata.uuid, 0, 1)
        .subscribe(
          hydroponicSettings => {
            this.hydroSett = hydroponicSettings[0];
          },
          err => {
            console.log('Settings receive error');
            console.log(JSON.stringify(err));
            this.subscriptionMap.get('GetHydroponicLastSettingsRequest').unsubscribe();
          }));
  }

  abs(num: number): number {
    if (num === 0) {
      return 0;
    }
    if (num > 0) {
      return num;
    }
    return num * -1;
  }


  search: OperatorFunction<string, string[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 1 ? [] : Array.from(TIME_ZONE_MAP.keys())
      .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );
}
