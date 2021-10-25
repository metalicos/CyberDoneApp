import {Component, OnInit} from '@angular/core';
import {HydroponicOneSettings, HydroponicSettingsService} from './services/hydroponic-settings.service';
import {HydroponicOperationsService, Metadata} from './services/hydroponic-operations.service';
import {EChartsOption} from 'echarts';
import {HydroponicDataService, HydroponicOneData} from './services/hydroponic-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hydroponic-device',
  templateUrl: './hydroponic.component.html',
  styleUrls: ['./hydroponic.component.css']
})
export class HydroponicComponent implements OnInit {
  uuid: string = '80aeff91-bf00-4d67-a44f-479344820f5c';
  metadata: Metadata = {id: 1, uuid: this.uuid, name: '', description: ''};
  hidden: string = '';
  hydroData?: HydroponicOneData;
  hydroSett?: HydroponicOneSettings;
  phOptions?: EChartsOption;
  tdsOptions?: EChartsOption;
  tmpOptions?: EChartsOption;
  chartPointsNumber: number = 10;
  isPhGraphCollapsed: boolean = true;
  isTdsGraphCollapsed: boolean = true;
  isTempGraphCollapsed: boolean = true;

  constructor(public settingService: HydroponicSettingsService,
              public dataService: HydroponicDataService,
              public operationsService: HydroponicOperationsService) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.uploadInfoFromServer();
    }, 1000);
  }

  private uploadInfoFromServer() {
    this.settingService.getHydroponicSettings(this.uuid).subscribe(sett => {
      this.hydroSett = sett;
      console.log(sett);
    });
    this.dataService.getHydroponicData(this.uuid).subscribe(data => {
      this.hydroData = data;
    });
    this.operationsService.getMetadata(this.uuid).subscribe(metadata => {
      this.metadata = metadata;
    });
    this.dataService.getHydroponicDataLimitedList(this.uuid, this.chartPointsNumber).subscribe(data => {
      console.log(data);
      this.phOptions = {
        xAxis: {
          type: 'category',
          data: data.map<string>(value => value.receiveTime[6] + ''),
        },
        yAxis: {
          type: 'value',
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
        },
        series: [{
          data: data.map<number>(value => value.phValue <= 0 ? 0 : value.phValue),
          type: 'line',
        }]
      };
      this.tdsOptions = {
        xAxis: {
          type: 'category',
          data: data.map<string>(value => value.receiveTime[6] + ''),
        },
        yAxis: {
          type: 'value',
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
        },
        series: [{
          data: data.map<number>(value => value.tdsValue),
          type: 'line',
        }],
      };
      this.tmpOptions = {
        xAxis: {
          type: 'category',
          data: data.map<string>(value => value.receiveTime[6] + ''),
        },
        yAxis: {
          type: 'value',
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
        },
        series: [{
          data: data.map<number>(value => value.temperatureValue),
          type: 'line',
        }],
      };
    });
    this.hidden = 'hidden';
  }

  startPhUp() {
    this.operationsService.controlHydroponicPhUpPump(this.uuid, '1');
  }

  stopPhUp() {
    this.operationsService.controlHydroponicPhUpPump(this.uuid, '0');
  }

  startPhDown() {
    this.operationsService.controlHydroponicPhDownPump(this.uuid, '1');
  }

  stopPhDown() {
    this.operationsService.controlHydroponicPhDownPump(this.uuid, '0');
  }

  startFertilizer() {
    this.operationsService.controlHydroponicTdsPump(this.uuid, '1');
  }

  stopFertilizer() {
    this.operationsService.controlHydroponicTdsPump(this.uuid, '0');
  }
}
