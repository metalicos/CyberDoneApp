import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EChartsOption} from 'echarts';
import {Observable, OperatorFunction, Subscription} from 'rxjs';
import {HydroponicControlService, HydroponicTimeDto} from '../../../../services/hydroponic-control.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {HYDROPONIC_TOPIC_LABEL_MAP} from './schedule/hydroponic-topic-label-map';
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {TIME_ZONE_MAP} from '../../time-zone-map';
import {DeviceMetadataDto, DeviceMetadataService} from '../../../../services/device-metadata.service';
import {DeviceScheduleService, RegularScheduleDto} from '../../../../services/device-schedule.service';
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
  @ViewChild('phGraph') public phGraph: ModalDirective;
  @ViewChild('tdsGraph') public tdsGraph: ModalDirective;
  @ViewChild('tempGraph') public tempGraph: ModalDirective;
  @Input() metadata: DeviceMetadataDto;
  scheduleList: RegularScheduleDto[];
  labelMap: Map<string, string>;
  hidden: string = '';
  hydroData: HydroponicDataDto = {
    ecValue: 0,
    microcontrollerTime: [0, 0, 0, 0, 0],
    phValue: 0,
    receiveTime: [0, 0, 0, 0, 0],
    tdsValue: 0,
    temperatureValue: 0,
    uuid: 'uuid'
  };
  hydroSett: HydroponicSettingsDto = {
    autotime: false,
    deviceEnable: false,
    dispensersEnable: false,
    fertilizerDoseMl: 0,
    isDispenserPhDownOpen: false,
    isDispenserPhUpOpen: false,
    isDispenserTdsOpen: false,
    microcontrollerTime: [0, 0, 0, 0, 0],
    mlPerMillisecond: 0,
    phDownDoseMl: 0,
    phUpDoseMl: 0,
    recheckDispensersAfterMs: 0,
    regulateErrorFertilizer: 0,
    regulateErrorPh: 0,
    restartCounter: 0,
    sensorsEnable: false,
    setupPhValue: 0,
    setupTdsValue: 0,
    setupTemperatureValue: 0,
    timeZone: ' ',
    uuid: ' ',
    wifiPASS: ' ',
    wifiSSID: ' '
  };
  phOptions: EChartsOption;
  tdsOptions?: EChartsOption;
  tmpOptions?: EChartsOption;
  chartPointsNumber: number = 30;
  isChartOpened: boolean = false;

  time: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  hiddenBtn: string = '';
  hiddenBtn1?: string = '';
  hiddenBtn2?: string = '';
  hiddenBtn3?: string = '';
  hiddenGeneral?: string = '';
  buttonUpdateDisabled?: string = 'disabled';
  isMetadataCollapsed: boolean = true;
  isSetupValuesCollapsed: boolean = true;
  isCalibrationCollapsed: boolean = true;
  isErrorsCollapsed: boolean = true;
  isDosingCollapsed: boolean = true;
  isWifiCollapsed: boolean = true;
  isTimeCollapsed: boolean = true;
  setupTdsValue: number = 600;
  setupPhValue: number = 6.2;
  phRegulationError: number = 0.5;
  tdsRegulationError: number = 20;
  phUpDoseMl: number = 2;
  phDownDoseMl: number = 2;
  fertilizerDoseMl: number = 2;
  recheckDosatorsAfterMs: number = 0;
  wifiSSID: string = '';
  wifiPASS: string = '';
  phLowCalibration: number = 4.0;
  phHighCalibration: number = 6.86;
  tdsCalibration: number = 1000;
  hydroponicName: string = 'Назва Гідропоніки';
  hydroponicDescription: string = 'Змінити опис можна в налаштуваннях';
  startDate: NgbDateStruct = {year: 2021, month: 10, day: 12};
  date: NgbDateStruct = {year: 2021, month: 10, day: 12};
  timeZone: string = '';
  autotime: boolean = true;
  enableDosators: boolean = true;
  uploadInfoTimer: any;
  currentDate: string;

  constructor(private deviceService: HydroponicControlService,
              private deviceSchedule: DeviceScheduleService,
              private deviceMetadataService: DeviceMetadataService,
              private hydroDataService: HydroponicDataService,
              private hydroSettService: HydroponicSettingsService) {
    this.labelMap = HYDROPONIC_TOPIC_LABEL_MAP;
  }

  ngOnInit(): void {
    this.uploadInfoTimer = setInterval(() => {
      this.uploadInfoFromServer();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptionMap.forEach(sub => {
      if (sub != null) {
        sub.unsubscribe();
      }
    });
    clearInterval(this.uploadInfoTimer);
  }

  clrSubscribers() {
    this.subscriptionMap.forEach(s => {
      if (s != null) {
        s.unsubscribe();
      }
    });
  }

  private uploadInfoFromServer() {
    if (this.isChartOpened) {
      this.subscriptionMap.set('GetHydroponicLastDataRequest',
        this.hydroDataService.getLastDataInDeviceWithUUID(this.metadata.uuid, 1, this.chartPointsNumber)
          .subscribe(
            hydroponicData => {
              this.hydroData = hydroponicData[0];
              this.currentDate = this.hydroData.receiveTime[0] + '.' + this.hydroData.receiveTime[1] + '.' + this.hydroData.receiveTime[2];
              this.phOptions = {
                xAxis: {
                  type: 'category',
                  data: hydroponicData.map<string>(d => d.receiveTime[3] + ':' + d.receiveTime[4] + ':' + d.receiveTime[5]),
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
                  data: hydroponicData.map<number>(d => d.phValue <= 0 ? 0 : d.phValue),
                  type: 'line',
                }]
              };
              this.tdsOptions = {
                xAxis: {
                  type: 'category',
                  data: hydroponicData.map<string>(d => d.receiveTime[3] + ':' + d.receiveTime[4] + ':' + d.receiveTime[5]),
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
                  data: hydroponicData.map<number>(d => d.tdsValue <= 0 ? 0 : d.tdsValue),
                  type: 'line',
                }],
              };
              this.tmpOptions = {
                xAxis: {
                  type: 'category',
                  data: hydroponicData.map<string>(d => d.receiveTime[3] + ':' + d.receiveTime[4] + ':' + d.receiveTime[5]),
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
                  data: hydroponicData.map<number>(d => d.temperatureValue <= 0 ? 0 : d.temperatureValue),
                  type: 'line',
                }],
              };
            },
            err => {
              console.log('Data receive error');
              console.log(JSON.stringify(err));
              this.subscriptionMap.get('GetHydroponicLastDataRequest').unsubscribe();
            }));
    } else {
      this.subscriptionMap.set('GetHydroponicLastDataRequest',
        this.hydroDataService.getLastDataInDeviceWithUUID(this.metadata.uuid, 1, 1)
          .subscribe(
            hydroponicData => {
              this.hydroData = hydroponicData[0];
            },
            err => {
              console.log('Data receive error');
              console.log(JSON.stringify(err));
              this.subscriptionMap.get('GetHydroponicLastDataRequest').unsubscribe();
            }));
    }
    this.subscriptionMap.set('GetHydroponicLastSettingsRequest',
      this.hydroSettService.getLastSettingsInDeviceWithUUID(this.metadata.uuid, 1, 1)
        .subscribe(
          hydroponicSettings => {
            this.hydroSett = hydroponicSettings[0];
          },
          err => {
            console.log('Settings receive error');
            console.log(JSON.stringify(err));
            this.subscriptionMap.get('GetHydroponicLastSettingsRequest').unsubscribe();
          }));
    this.subscriptionMap.set('GetHydroponicSchedulesRequest',
      this.deviceSchedule.getSchedulesByKey(this.metadata.uuid, this.metadata.deviceType)
        .subscribe(
          schedules => {
            this.scheduleList = schedules;
          },
          err => {
            console.log('Schedules receive error');
            console.log(JSON.stringify(err));
            this.subscriptionMap.get('GetHydroponicSchedulesRequest').unsubscribe();
          }));
    this.hiddenBtn1 = this.hiddenBtn2 = this.hiddenBtn3 = this.hiddenGeneral = this.hiddenBtn = 'hidden';
    this.buttonUpdateDisabled = '';
  }

  startPhUp() {
    this.subscriptionMap.set('UpdatePhUp',
      this.deviceService.updatePhUpPumpStatus(this.metadata.uuid, '1').subscribe(data => console.log(data))
    );
  }

  stopPhUp() {
    this.subscriptionMap.set('UpdatePhUp',
      this.deviceService.updatePhUpPumpStatus(this.metadata.uuid, '0').subscribe(data => console.log(data))
    );
  }

  startPhDown() {
    this.subscriptionMap.set('UpdatePhDown',
      this.deviceService.updatePhDownPumpStatus(this.metadata.uuid, '1').subscribe(data => console.log(data))
    );
  }

  stopPhDown() {
    this.subscriptionMap.set('UpdatePhDown',
      this.deviceService.updatePhDownPumpStatus(this.metadata.uuid, '0').subscribe(data => console.log(data))
    );
  }

  startTds() {
    this.subscriptionMap.set('UpdateTds',
      this.deviceService.updateTdsPumpStatus(this.metadata.uuid, '1').subscribe(data => console.log(data))
    );
  }

  stopTds() {
    this.subscriptionMap.set('UpdateTds',
      this.deviceService.updateTdsPumpStatus(this.metadata.uuid, '0').subscribe(data => console.log(data))
    );
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
  )

  updateSetupValues() {
    this.hiddenBtn1 = '';
    this.buttonUpdateDisabled = 'disabled';
    this.subscriptionMap.set('updateSetupTdsValue',
      this.deviceService.updateSetupTdsValue(this.metadata.uuid, this.setupTdsValue + '').subscribe(d => console.log(d)));
    this.subscriptionMap.set('updateSetupPhValue',
      this.deviceService.updateSetupPhValue(this.metadata.uuid, this.setupPhValue + '').subscribe(d => console.log(d)));
  }

  updateErrorValues() {
    this.hiddenBtn2 = '';
    this.buttonUpdateDisabled = 'disabled';
    this.subscriptionMap.set('updateRegulatePhError',
      this.deviceService.updateRegulatePhError(this.metadata.uuid, this.phRegulationError + '').subscribe(d => console.log(d)));
    this.subscriptionMap.set('updateRegulateTdsError',
      this.deviceService.updateRegulateTdsError(this.metadata.uuid, this.tdsRegulationError + '').subscribe(d => console.log(d)));
  }

  updateDosingValues() {
    this.hiddenBtn3 = '';
    this.buttonUpdateDisabled = 'disabled';
    this.subscriptionMap.set('updatePhUpDose',
      this.deviceService.updatePhUpDose(this.metadata.uuid, this.phUpDoseMl + '').subscribe(d => console.log(d)));
    this.subscriptionMap.set('updatePhDownDose',
      this.deviceService.updatePhDownDose(this.metadata.uuid, this.phDownDoseMl + '').subscribe(d => console.log(d)));
    this.subscriptionMap.set('updateFertilizerDose',
      this.deviceService.updateFertilizerDose(this.metadata.uuid, this.fertilizerDoseMl + '').subscribe(d => console.log(d)));
    this.subscriptionMap.set('updateRecheckDispensersAfterTime',
      this.deviceService.updateRecheckDispensersAfterTime(this.metadata.uuid, this.recheckDosatorsAfterMs + '')
        .subscribe(d => console.log(d)));
  }

  updateWifiValues() {
    this.subscriptionMap.set('updateWifiSsid',
      this.deviceService.updateWifiSsid(this.metadata.uuid, this.wifiSSID + '').subscribe(d => console.log(d)));
    this.subscriptionMap.set('updateWifiPassword',
      this.deviceService.updateWifiPassword(this.metadata.uuid, this.wifiPASS + '').subscribe(d => console.log(d)));
  }

  calibratePhLow() {
    this.subscriptionMap.set('calibratePhLow',
      this.deviceService.calibratePhLow(this.metadata.uuid, this.phLowCalibration + '').subscribe(d => console.log(d)));
  }

  calibratePhHigh() {
    this.subscriptionMap.set('calibratePhHigh',
      this.deviceService.calibratePhHigh(this.metadata.uuid, this.phHighCalibration + '').subscribe(d => console.log(d)));
  }

  calibratePhClear() {
    this.subscriptionMap.set('clrCalibrationPhSensor',
      this.deviceService.clrCalibrationPhSensor(this.metadata.uuid).subscribe(d => console.log(d)));
  }

  calibrateTds() {
    this.subscriptionMap.set('calibrateTdsSensor',
      this.deviceService.calibrateTdsSensor(this.metadata.uuid, this.tdsCalibration + '').subscribe(d => console.log(d)));
  }

  calibrateTdsClear() {
    this.subscriptionMap.set('clrCalibrationTdsSensor',
      this.deviceService.clrCalibrationTdsSensor(this.metadata.uuid).subscribe(d => console.log(d)));
  }

  updateMetadata() {
    this.subscriptionMap.set('updateMetadata',
      this.deviceMetadataService.updateMetadata(this.metadata.uuid, this.hydroponicName, this.hydroponicDescription)
        .subscribe(d => console.log(d)));
  }

  updateTime() {
    const time: HydroponicTimeDto = {
      microcontrollerTime: [
        this.date.year,
        this.date.month,
        this.date.day,
        this.time.hour,
        this.time.minute,
        this.time.second,
      ],
      microcontrollerTimeZone: '',
      uuid: this.metadata.uuid
    };
    this.subscriptionMap.set('updateTimeManually',
      this.deviceService.updateTimeManually(time).subscribe(d => console.log(d)));
  }

  changeTimeZone() {
    this.subscriptionMap.set('updateZone',
      this.deviceService.updateZone(this.metadata.uuid, this.timeZone).subscribe(d => console.log(d)));
  }

  changeAutoTime() {
    this.subscriptionMap.set('updateAutotime',
      this.deviceService.updateAutotime(this.metadata.uuid, (this.autotime ? 0 : 1) + '').subscribe(d => console.log(d)));
  }

  changeEnableDosators() {
    this.subscriptionMap.set('updateDispensersEnable',
      this.deviceService.updateDispensersEnable(this.metadata.uuid, (this.enableDosators ? 0 : 1) + '').subscribe(d => console.log(d)));
  }
}
