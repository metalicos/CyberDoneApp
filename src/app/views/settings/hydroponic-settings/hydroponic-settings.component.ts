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

  uuid: string;
  updateInfoTimer: any;
  hydroponicSettSub: Subscription;
  currentSettings: HydroponicSettingsDto;
  hydroSettForm: any;
  editMode: boolean = false;

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
    this.updateInfoTimer = setInterval(() => {
      if (!this.editMode) {
        this.hydroponicSettSub = this.hydroSettService.getLastSettingsInDeviceWithUUID(this.uuid, 0, 1)
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
          );
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.hydroponicSettSub !== null) {
      this.hydroponicSettSub.unsubscribe();
    }
    clearInterval(this.updateInfoTimer);
  }

  private ifBadSetValue(value: any, other: any) {
    if (value === undefined || value === null) {
      return other;
    }
    return value;
  }

  changeMlPerMillisecond() {
    this.editMode = false;
  }

  changeRegulateErrorPh() {
    this.editMode = false;
  }

  changeRegulateErrorFertilizer() {
    this.editMode = false;
  }

  changePhUpDoseMl() {
    this.editMode = false;
  }

  changePhDownDoseMl() {
    this.editMode = false;
  }

  changeFertilizerDoseMl() {
    this.editMode = false;
  }

  changeRecheckDispensersAfterMs() {
    this.editMode = false;
  }

  changeSetupPhValue() {
    this.editMode = false;
  }

  changeSetupTdsValue() {
    this.editMode = false;
  }

  changeDeviceEnable() {
    this.editMode = false;
  }

  changeDispensersEnable() {
    this.editMode = false;
  }

  changeSensorsEnable() {
    this.editMode = false;
  }

  changeRestartCounter() {
    this.editMode = false;
  }

  changeWifiSSID() {
    this.editMode = false;
  }

  changeWifiPASS() {
    this.editMode = false;
  }

  changeTimeZone() {
    this.editMode = false;
  }

  changeAutotime() {
    this.editMode = false;
  }
}
