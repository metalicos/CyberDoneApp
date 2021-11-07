import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevicesRoutingModule} from './devices-routing.module';
import {DevicesComponent} from './devices-component/devices.component';
import {AddRemoveDevicesComponent} from './add-remove-devices-component/add-remove-devices.component';
import {HydroponicComponent} from './devices-component/hydroponic/hydroponic.component';
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
import {FormsModule} from '@angular/forms';
import {RemoveItemComponent} from './add-remove-devices-component/remove-item/remove-item.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ScheduleElementComponent} from './devices-component/hydroponic/schedule/schedule-element.component';
import {ScheduleSetupComponent} from './devices-component/hydroponic/schedule/schedule-setup.component';


@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NgbCollapseModule,
    NgxEchartsModule,
    FormsModule,
    NgbButtonsModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    DevicesComponent,
    AddRemoveDevicesComponent,
    HydroponicComponent,
    RemoveItemComponent,
    ScheduleElementComponent,
    ScheduleSetupComponent,
  ],
  exports: [
    HydroponicComponent,
    RemoveItemComponent,
    ScheduleElementComponent,
    ScheduleSetupComponent,
  ],
})
export class DevicesModule {
}
