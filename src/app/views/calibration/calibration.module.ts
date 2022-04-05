import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NgbButtonsModule,
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbTimepickerModule,
  NgbTooltipModule,
  NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';
import {NgxEchartsModule} from 'ngx-echarts';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap/alert';
import {HydroponicSensorCalibrationComponent} from './hydroponic-sensor-calibration/hydroponic-sensor-calibration.component';
import {CalibrationRoutingModule} from './calibration-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CalibrationRoutingModule,
    NgbCollapseModule,
    NgxEchartsModule,
    NgbButtonsModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    AlertModule,
    FormsModule,
  ],
  declarations: [
    HydroponicSensorCalibrationComponent,
  ],
  exports: [],
})
export class CalibrationModule {
}
