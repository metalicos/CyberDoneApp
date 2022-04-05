import {Component, OnDestroy, OnInit} from '@angular/core';
import {HydroponicControlService} from '../../../services/hydroponic-control.service';
import {ErrorHandlerService} from '../../../services/error-handle.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {HydroponicSettingsService} from '../../../services/hydroponic-settings.service';
import {HydroponicDataDto, HydroponicDataService} from '../../../services/hydroponic-data.service';
import {HydroponicCalibrationDataDto, HydroponicCalibrationService} from '../../../services/hydroponic-calibration.service';

@Component({
  selector: 'app-hydroponic-sensor-calibration',
  templateUrl: './hydroponic-sensor-calibration.component.html',
  styleUrls: ['./hydroponic-sensor-calibration.component.scss']
})
export class HydroponicSensorCalibrationComponent implements OnInit, OnDestroy {
  uuid: string;
  currentHydroponicData: HydroponicDataDto;
  hydroponicCalibrationDataDto: HydroponicCalibrationDataDto;
  phSensorCalibrationForm: any;
  updateInfoTimer: any;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute,
              private hydroDataService: HydroponicDataService,
              private hydroponicCalibrationService: HydroponicCalibrationService,
              private hydroponicSettingsService: HydroponicSettingsService,
              private hydroponicControlService: HydroponicControlService,
              private fb: FormBuilder,
              private errorHandler: ErrorHandlerService) {
    this.route.params.subscribe(params => {
      this.uuid = params['uuid'];
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.updateInfoTimer);
  }

  ngOnInit(): void {
    this.updateInfoWithLastSettingsFromDb();
    this.updateInfoTimer = setInterval(() => {
      this.hydroDataService.getLastDataInDeviceWithUUID(this.uuid, 0, 1).toPromise()
        .then(data => this.currentHydroponicData = data[0],
          err => this.errorHandler.handleError(err.status, err.error)
        );
      console.log(this.currentHydroponicData);
    }, 1000);
  }

  updateInfoWithLastSettingsFromDb() {
    this.hydroponicCalibrationService.getLastCalibrationDataInDeviceWithUUID(this.uuid, 0, 1).toPromise()
      .then(calibration => this.hydroponicCalibrationDataDto = calibration[0],
        err => this.errorHandler.handleError(err.status, err.error)
      );
  }

  calibrateLowPoint(value: string) {
    this.hydroponicControlService.calibratePhLow(this.uuid, value).toPromise().then(calibration => console.log(calibration),
      err => this.errorHandler.handleError(err.status, err.error));
  }

  calibrateHighPoint(value: string) {
    this.hydroponicControlService.calibratePhHigh(this.uuid, value).toPromise().then(calibration => console.log(calibration),
      err => this.errorHandler.handleError(err.status, err.error));
  }

  clearTdsCalibration() {
    this.hydroponicControlService.clrCalibrationTdsSensor(this.uuid).toPromise().then(calibration => console.log(calibration),
      err => this.errorHandler.handleError(err.status, err.error));
  }

  saveCalibrationData() {
    this.hydroponicControlService.saveAllSettings(this.uuid).toPromise().then(calibration => console.log(calibration),
      err => this.errorHandler.handleError(err.status, err.error));
  }

  clearPhCalibration() {
    this.hydroponicControlService.clrCalibrationPhSensor(this.uuid).toPromise().then(calibration => console.log(calibration),
      err => this.errorHandler.handleError(err.status, err.error));
  }
}
