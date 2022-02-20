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
import {AutomationRoutingModule} from './automation-routing.module';
import {CalendarSingleValueAutomationComponent} from './calendar-single-value-automation/calendar-single-value-automation.component';
import {RegularSingleValueAutomationComponent} from './regular-single-value-automation/regular-single-value-automation.component';


@NgModule({
  imports: [
    CommonModule,
    AutomationRoutingModule,
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
    CalendarSingleValueAutomationComponent,
    RegularSingleValueAutomationComponent
  ],
  exports: [],
})
export class AutomationModule {
}
