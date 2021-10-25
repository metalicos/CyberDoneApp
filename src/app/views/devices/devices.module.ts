import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevicesRoutingModule} from './devices-routing.module';
import {DevicesComponent} from './devices-component/devices.component';
import {AddRemoveDevicesComponent} from './add-remove-devices-component/add-remove-devices.component';
import {HydroponicComponent} from './devices-component/hydroponic/hydroponic.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxEchartsModule} from 'ngx-echarts';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NgbCollapseModule,
    NgxEchartsModule,
    FormsModule,
  ],
  declarations: [
    DevicesComponent,
    AddRemoveDevicesComponent,
    HydroponicComponent
  ],
  exports: [
    HydroponicComponent
  ],
})
export class DevicesModule {
}
