import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HydroponicSettingsDto, HydroponicSettingsService} from '../../../services/hydroponic-settings.service';
import {ErrorHandlerService} from '../../../services/error-handle.service';
import {HydroponicOperationsService} from '../../devices/devices-component/hydroponic/services/hydroponic-operations.service';
import {DeviceMetadataService} from '../../../services/device-metadata.service';
import {Subscription} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import {UUID_PATTERN} from '../../../services/validator-utils.service';

@Component({
  selector: 'app-hydroponic-settings',
  templateUrl: './hydroponic-settings.component.html',
  styleUrls: ['./hydroponic-settings.component.scss']
})
export class HydroponicSettingsComponent implements OnInit, OnDestroy {
  subMap: Map<string, Subscription> = new Map<string, Subscription>();
  uuid: string;
  currentSettings: HydroponicSettingsDto;
  hydroSettForm: any;
  editMode: boolean = false;

  lockMap: Map<string, any> = new Map<string, any>([
    ['mlPerMillisecond', {}],
    ['regulateErrorPh', {}],
    ['regulateErrorFertilizer', {}],
    ['phUpDoseMl', {}],
    ['phDownDoseMl', {}],
    ['fertilizerDoseMl', {}],
    ['recheckDispensersAfterMs', {}],
    ['setupPhValue', {}],
    ['setupTdsValue', {}],
    ['setupTemperatureValue', {}],
    ['deviceEnable', {}],
    ['dispensersEnable', {}],
    ['sensorsEnable', {}],
    ['restartCounter', {}],
    ['wifiSSID', {}],
    ['wifiPASS', {}],
    ['autotime', {}],
    ['timeZone', {}],
  ]);

  setAllDisabledExceptName(name: string) {
    this.lockMap.forEach((value, key) => {
      if (key !== null && key !== name) {
        value.disabled = true;
      }
    });
    const object = this.lockMap.get(name);
    object.disabled = !object.disabled;
  }

  setAllDisabled() {
    this.lockMap.forEach((value, key) => {
      value.disabled = true;
    });
  }

  isDisabled(name: string): boolean {
    return this.lockMap.get(name);
  }

  constructor(private route: ActivatedRoute,
              private hydroSettService: HydroponicSettingsService,
              private hydroOperationService: HydroponicOperationsService,
              private deviceMetadataService: DeviceMetadataService,
              private errorHandler: ErrorHandlerService,
              private fb: FormBuilder) {
    this.route.params.subscribe(params => {
      this.uuid = params['uuid'];
    });
  }

  ngOnInit(): void {
    this.updateInfoWithLastSettingsFromDb();
  }

  getFormSettings(): HydroponicSettingsDto {
    this.currentSettings = this.hydroSettForm.value;
    console.log(this.currentSettings);
    return this.currentSettings;
  }

  updateInfoWithLastSettingsFromDb() {
    this.subMap.set('getLastSettingsInDeviceWithUUID',
      this.hydroSettService.getLastSettingsInDeviceWithUUID(this.uuid, 0, 1)
        .subscribe(
          sett => {
            const set = this.currentSettings = sett[0];
            console.log('RUNING ... >>>>>>>>>>>>>>>');
            this.hydroSettForm = this.fb.group({
              uuid: [set.uuid, [Validators.required, Validators.pattern(UUID_PATTERN)]],
              mlPerMillisecond: [set.mlPerMillisecond, [Validators.required]],
              regulateErrorPh: [set.regulateErrorPh, [Validators.required]],
              regulateErrorFertilizer: [set.regulateErrorFertilizer, [Validators.required]],
              phUpDoseMl: [set.phDownDoseMl, [Validators.required]],
              phDownDoseMl: [set.phDownDoseMl, [Validators.required]],
              fertilizerDoseMl: [set.fertilizerDoseMl, [Validators.required]],
              recheckDispensersAfterMs: [set.recheckDispensersAfterMs, [Validators.required]],
              setupPhValue: [set.setupPhValue, [Validators.required]],
              setupTdsValue: [set.setupTdsValue, [Validators.required]],
              setupTemperatureValue: [set.setupTemperatureValue, [Validators.required]],
              deviceEnable: [set.deviceEnable, [Validators.required]],
              dispensersEnable: [set.dispensersEnable, [Validators.required]],
              sensorsEnable: [set.sensorsEnable, [Validators.required]],
              restartCounter: [set.restartCounter, [Validators.required]],
              wifiSSID: [set.wifiSSID, [Validators.required]],
              wifiPASS: [set.wifiPASS, [Validators.required]],
              autotime: [set.autotime, [Validators.required]],
              timeZone: [set.timeZone, [Validators.required]],
            });
          },
          err => this.errorHandler.handleError(err.status, err.error)
        ));
  }


  ngOnDestroy(): void {
    this.subMap.forEach(sub => {
      if (sub !== null) {
        sub.unsubscribe();
      }
    });
  }

  private ifBadSetValue(value: any, other: any) {
    if (value === undefined || value === null) {
      return other;
    }
    return value;
  }

  changeMlPerMillisecond() {
    this.editMode = false;
    this.subMap.set('updateHydroponicPumpSpeedMlPerMillisecond',
      this.hydroOperationService.updateHydroponicPumpSpeedMlPerMillisecond(this.uuid, this.getFormSettings().mlPerMillisecond + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }

  changeRegulateErrorPh() {
    this.editMode = false;
    this.subMap.set('updateRegulatorErrorPh',
      this.hydroOperationService.updateRegulatorErrorPh(this.uuid, this.getFormSettings().regulateErrorPh + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }

  changeRegulateErrorFertilizer() {
    this.editMode = false;
    this.subMap.set('updateRegulatorErrorTds',
      this.hydroOperationService.updateRegulatorErrorTds(this.uuid, this.getFormSettings().regulateErrorFertilizer + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }

  changePhUpDoseMl() {
    this.editMode = false;
    this.subMap.set('updateHydroponicDosePhUp',
      this.hydroOperationService.updateHydroponicDosePhUp(this.uuid, this.getFormSettings().phUpDoseMl + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }

  changePhDownDoseMl() {
    this.editMode = false;
    this.subMap.set('updateHydroponicDosePhDown',
      this.hydroOperationService.updateHydroponicDosePhDown(this.uuid, this.getFormSettings().phDownDoseMl + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));

  }

  changeFertilizerDoseMl() {
    this.editMode = false;
    this.subMap.set('updateHydroponicDoseTds',
      this.hydroOperationService.updateHydroponicDoseTds(this.uuid, this.getFormSettings().fertilizerDoseMl + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));

  }

  changeRecheckDispensersAfterMs() {
    this.editMode = false;
    this.subMap.set('updateHydroponicDispensersRecheckTime',
      this.hydroOperationService.updateHydroponicDispensersRecheckTime(this.uuid, this.getFormSettings().recheckDispensersAfterMs + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));

  }

  changeSetupPhValue() {
    this.editMode = false;
    this.subMap.set('updateHydroponicSetupPh',
      this.hydroOperationService.updateHydroponicSetupPh(this.uuid, this.getFormSettings().setupPhValue + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));

  }

  changeSetupTdsValue() {
    this.editMode = false;
    this.subMap.set('updateHydroponicSetupTds',
      this.hydroOperationService.updateHydroponicSetupTds(this.uuid, this.getFormSettings().setupTdsValue + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }

  changeDispensersEnable() {
    this.editMode = false;
    this.subMap.set('updateHydroponicEnableDispensers',
      this.hydroOperationService.updateHydroponicEnableDispensers(this.uuid, (this.getFormSettings().dispensersEnable ? 1 : 0) + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }

  changeSensorsEnable() {
    this.editMode = false;
    this.subMap.set('updateHydroponicEnableSensors',
      this.hydroOperationService.updateHydroponicEnableSensors(this.uuid, (this.getFormSettings().sensorsEnable ? 1 : 0) + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }

  changeRestartCounter() {
    this.editMode = false;
    this.subMap.set('updateRestartCounter',
      this.hydroOperationService.updateRestartCounter(this.uuid, this.getFormSettings().restartCounter + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }

  changeWifiSSID() {
    this.editMode = false;
    this.subMap.set('updateWifiSsid',
      this.hydroOperationService.updateWifiSsid(this.uuid, this.getFormSettings().wifiSSID).subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));

  }

  changeWifiPASS() {
    this.editMode = false;
    this.subMap.set('updateWifiPassword',
      this.hydroOperationService.updateWifiPassword(this.uuid, this.getFormSettings().wifiPASS).subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }

  changeTimeZone() {
    this.editMode = false;
    this.subMap.set('updateZone',
      this.hydroOperationService.updateZone(this.uuid, this.getFormSettings().timeZone).subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }

  changeAutotime() {
    this.editMode = false;
    this.subMap.set('updateHydroponicAutotime',
      this.hydroOperationService.updateHydroponicAutotime(this.uuid, (this.getFormSettings().autotime ? 1 : 0) + '').subscribe(
        data => setTimeout(() => {
          this.updateInfoWithLastSettingsFromDb();
        }, 500),
        err => this.errorHandler.handleError(err.status, err.error)
      ));
  }
}
