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
import {AccountRoutingModule} from './account-routing.module';
import {AccountProfileComponent} from './account-profile/account-profile.component';


@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
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
    AccountProfileComponent,
  ],
  exports: [],
})
export class AccountModule {
}
