import {Component, OnDestroy, OnInit} from '@angular/core';
import {HydroponicSettingsService} from '../../../services/hydroponic-settings.service';
import {HydroponicDataService} from '../../../services/hydroponic-data.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {EChartsOption} from 'echarts';
import {ErrorHandlerService} from '../../../services/error-handle.service';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss']
})
export class LinearChartComponent implements OnInit, OnDestroy {
  uuid: string;
  type: string;
  hydroponicDataSub: Subscription;
  phOptions: EChartsOption;
  lastPh: number;
  tdsOptions?: EChartsOption;
  lastTds: number;
  tmpOptions?: EChartsOption;
  lastTmp: number;
  currentDate: string;
  chartPointsNumber: number = 30;
  updateInfoTimer: any;

  constructor(private route: ActivatedRoute, private hydroSettService: HydroponicSettingsService,
              private errorHandler: ErrorHandlerService, private hydroDataService: HydroponicDataService) {
    this.route.params.subscribe(params => {
      this.uuid = params['uuid'];
      this.type = params['type'];
    });
  }

  ngOnInit(): void {
    this.updateInfoTimer = setInterval(() => {
      this.hydroponicDataSub = this.hydroDataService.getLastDataInDeviceWithUUID(this.uuid, 0, this.chartPointsNumber).subscribe(
        data => {
          const hour = data[0].microcontrollerTime[0] === undefined ? '0' : data[0].microcontrollerTime[0];
          const minute = data[0].microcontrollerTime[1] === undefined ? '0' : data[0].microcontrollerTime[1];
          const second = data[0].microcontrollerTime[2] === undefined ? '0' : data[0].microcontrollerTime[2];
          this.currentDate = hour + '.' + minute + '.' + second;
          if (this.type === 'ph') {
            this.lastPh = data[this.chartPointsNumber - 1].phValue;
            const dataSeries = data.map<number>(d => d.phValue <= 0 ? 0 : d.phValue);
            const timeSeries = data.map<string>(d =>
              (d.microcontrollerTime[3] === undefined ? '0' : d.microcontrollerTime[3]) + ':' +
              (d.microcontrollerTime[4] === undefined ? '0' : d.microcontrollerTime[4]) + ':' +
              (d.microcontrollerTime[5] === undefined ? '0' : d.microcontrollerTime[5]));
            this.phOptions = this.setupOptions(dataSeries, timeSeries);
            this.tdsOptions = undefined;
            this.tmpOptions = undefined;
          }
          if (this.type === 'tds') {
            this.lastTds = data[this.chartPointsNumber - 1].tdsValue;
            const dataSeries = data.map<number>(d => d.tdsValue <= 0 ? 0 : d.tdsValue);
            const timeSeries = data.map<string>(d =>
              (d.microcontrollerTime[3] === undefined ? '0' : d.microcontrollerTime[3]) + ':' +
              (d.microcontrollerTime[4] === undefined ? '0' : d.microcontrollerTime[4]) + ':' +
              (d.microcontrollerTime[5] === undefined ? '0' : d.microcontrollerTime[5]));
            this.tdsOptions = this.setupOptions(dataSeries, timeSeries);
            this.tmpOptions = undefined;
            this.phOptions = undefined;
          }
          if (this.type === 'temp') {
            this.lastTmp = data[this.chartPointsNumber - 1].temperatureValue;
            const dataSeries = data.map<number>(d => d.temperatureValue <= 0 ? 0 : d.temperatureValue);
            const timeSeries = data.map<string>(d =>
              (d.microcontrollerTime[3] === undefined ? '0' : d.microcontrollerTime[3]) + ':' +
              (d.microcontrollerTime[4] === undefined ? '0' : d.microcontrollerTime[4]) + ':' +
              (d.microcontrollerTime[5] === undefined ? '0' : d.microcontrollerTime[5]));
            this.tmpOptions = this.setupOptions(dataSeries, timeSeries);
            this.tdsOptions = undefined;
            this.phOptions = undefined;
          }
        },
        err => this.errorHandler.handleError(err.status, err.error)
      );
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.hydroponicDataSub !== null) {
      this.hydroponicDataSub.unsubscribe();
    }
    clearInterval(this.updateInfoTimer);
  }

  setupOptions(dataSeries: any, timeSeries: any): EChartsOption {
    return {
      xAxis: {
        type: 'category',
        data: timeSeries,
      },
      yAxis: {
        type: 'value',
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.1,
      },
      series: [{
        data: dataSeries,
        type: 'line',
      }]
    };
  }
}
