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
import {SettingsRoutingModule} from './settings-routing.module';
import {HydroponicSettingsComponent} from './hydroponic-settings/hydroponic-settings.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';


@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
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
    AccountSettingsComponent,
    HydroponicSettingsComponent,
  ],
  exports: [],
})
export class SettingsModule {
}
