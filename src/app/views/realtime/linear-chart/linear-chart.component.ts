import {Component, OnDestroy, OnInit} from '@angular/core';
import {HydroponicSettingsService} from '../../../services/hydroponic-settings.service';
import {HydroponicDataService} from '../../../services/hydroponic-data.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {EChartsOption} from 'echarts';

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
              private hydroDataService: HydroponicDataService) {
    this.route.params.subscribe(params => {
      this.uuid = params['uuid'];
      this.type = params['type'];
    });
  }

  ngOnInit(): void {
    this.updateInfoTimer = setInterval(() => {
      this.hydroponicDataSub = this.hydroDataService.getLastDataInDeviceWithUUID(this.uuid, 0, this.chartPointsNumber).subscribe(
        data => {
          this.currentDate = data[0].microcontrollerTime[0] + '.' + data[0].microcontrollerTime[1] + '.' + data[0].microcontrollerTime[2];
          if (this.type === 'ph') {
            const dataSeries = data.map<number>(d => d.phValue <= 0 ? 0 : d.phValue);
            const timeSeries = data.map<string>(d => d.microcontrollerTime[3] + ':' + d.microcontrollerTime[4] + ':' + d.microcontrollerTime[5]);
            this.phOptions = this.setupOptions(dataSeries, timeSeries);
          }
          if (this.type === 'tds') {
            const dataSeries = data.map<number>(d => d.tdsValue <= 0 ? 0 : d.tdsValue);
            const timeSeries = data.map<string>(d => d.microcontrollerTime[3] + ':' + d.microcontrollerTime[4] + ':' + d.microcontrollerTime[5]);
            this.tdsOptions = this.setupOptions(dataSeries, timeSeries);
          }
          if (this.type === 'temp') {
            this.lastTmp = data[this.chartPointsNumber - 1].temperatureValue;
            const dataSeries = data.map<number>(d => d.temperatureValue <= 0 ? 0 : d.temperatureValue);
            console.log(dataSeries);
            const timeSeries = data.map<string>(d => d.microcontrollerTime[3] + ':' + d.microcontrollerTime[4] + ':' + d.microcontrollerTime[5]);
            console.log(timeSeries);
            this.tmpOptions = this.setupOptions(dataSeries, timeSeries);
            console.log(this.tmpOptions);
          }
        },
        err => console.log('Data receive error   ' + JSON.stringify(err))
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
