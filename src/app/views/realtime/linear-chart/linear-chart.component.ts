import {Component, OnDestroy, OnInit} from '@angular/core';
import {HydroponicSettingsService} from '../../../services/hydroponic-settings.service';
import {HydroponicDataDto, HydroponicDataService} from '../../../services/hydroponic-data.service';
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
  tdsOptions?: EChartsOption;
  tmpOptions?: EChartsOption;
  currentDate: string;
  chartPointsNumber: number = 30;
  updateInfoTimer: any;

  constructor(private route: ActivatedRoute,
              private hydroponicSettingsService: HydroponicSettingsService,
              private hydroDataService: HydroponicDataService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.uuid = params['uuid'];
      this.type = params['type'];
    });
    this.updateInfoTimer = setInterval(() => {
      this.hydroponicDataSub = this.hydroDataService.getLastDataInDeviceWithUUID(this.uuid, 0, this.chartPointsNumber)
        .subscribe(data => {
            console.log(data);
            this.currentDate = data[0].microcontrollerTime[0] + '.' + data[0].microcontrollerTime[1] + '.' + data[0].microcontrollerTime[2];
            this.phOptions = this.setupOptions(data, 'ph');
            this.tdsOptions = this.setupOptions(data, 'tds');
            this.tmpOptions = this.setupOptions(data, 'temp');
          },
          err => {
            console.log('Data receive error');
            console.log(JSON.stringify(err));
          });
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.hydroponicDataSub !== null) {
      this.hydroponicDataSub.unsubscribe();
    }
    clearInterval(this.updateInfoTimer);
  }

  setupOptions(hydroponicData: HydroponicDataDto[], value: string): EChartsOption {
    let dataSeries = (value === 'ph') ? hydroponicData.map<number>(d => d.phValue <= 0 ? 0 : d.phValue) : [];
    dataSeries = (value === 'tds') ? hydroponicData.map<number>(d => d.tdsValue <= 0 ? 0 : d.tdsValue) : dataSeries;
    dataSeries = (value === 'temp') ? hydroponicData.map<number>(d => d.temperatureValue <= 0 ? 0 : d.temperatureValue) : dataSeries;
    console.log(dataSeries);
    return {
      xAxis: {
        type: 'category',
        data: hydroponicData.map<string>(d => d.microcontrollerTime[3] + ':' + d.microcontrollerTime[4] + ':' + d.microcontrollerTime[5]),
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
        data: dataSeries,
        type: 'line',
      }]
    };
  }
}
