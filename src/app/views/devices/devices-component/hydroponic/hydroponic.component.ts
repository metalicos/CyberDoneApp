import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, OperatorFunction, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {TIME_ZONE_MAP} from '../../time-zone-map';
import {DeviceMetadataDto} from '../../../../services/device-metadata.service';
import {HydroponicDataDto, HydroponicDataService} from '../../../../services/hydroponic-data.service';
import {HydroponicSettingsDto, HydroponicSettingsService} from '../../../../services/hydroponic-settings.service';
import {ErrorHandlerService} from '../../../../services/error-handle.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hydroponic-device',
  templateUrl: './hydroponic.component.html',
  styleUrls: ['./hydroponic.component.css']
})
export class HydroponicComponent implements OnDestroy, OnInit {
  @Input() metadata: DeviceMetadataDto;
  hydroData: HydroponicDataDto;
  hydroSett: HydroponicSettingsDto;
  updateInfoTimer: any;

  constructor(private hydroDataService: HydroponicDataService,
              private hydroSettService: HydroponicSettingsService,
              private errorHandler: ErrorHandlerService) {
  }

  ngOnInit(): void {
    this.updateInfoTimer = setInterval(() => {
      this.updateInfoFromServer();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.updateInfoTimer);
  }

  private updateInfoFromServer() {
      this.hydroDataService.getLastDataInDeviceWithUUID(this.metadata.uuid, 0, 1).toPromise().then(
          hydroponicData => this.hydroData = hydroponicData[0],
          err => this.errorHandler.handleError(err.status, err.error));
      this.hydroSettService.getLastSettingsInDeviceWithUUID(this.metadata.uuid, 0, 1).toPromise().then(
        hydroponicSettings => this.hydroSett = hydroponicSettings[0],
          err => this.errorHandler.handleError(err.status, err.error));
    console.log(this.hydroData);
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
