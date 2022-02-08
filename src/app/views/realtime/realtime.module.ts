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
import {RealtimeRoutingModule} from './realtime-routing.module';
import {LinearChartComponent} from '../realtime/linear-chart/linear-chart.component';
import {TableComponent} from '../realtime/table/table.component';


@NgModule({
  imports: [
    CommonModule,
    RealtimeRoutingModule,
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
    LinearChartComponent,
    TableComponent
  ],
  exports: [],
})
export class RealtimeModule {
}
