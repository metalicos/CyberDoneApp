import {NgModule} from '@angular/core';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {IconModule, IconSetModule, IconSetService} from '@coreui/icons-angular';
import {AppComponent} from './app.component';

// Import containers
import {DefaultLayoutComponent} from './containers';

import {P404Component} from './views/error/404.component';
import {P500Component} from './views/error/500.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule} from '@coreui/angular';

// Import routing module
import {AppRoutingModule} from './app.routing';

// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts';
import {authInterceptorProviders} from './security/auth.interceptor';
import {AccountService} from './services/account.service';
import {HttpClientModule} from '@angular/common/http';
import {ForgotPasswordComponent} from './views/forgotPassword/forgot-password.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxEchartsModule} from 'ngx-echarts';
import {LogoutComponent} from './views/logout/logout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LinearChartComponent} from './views/realtime/linear-chart/linear-chart.component';
import {TableComponent} from './views/realtime/table/table.component';
import { HydroponicSettingsComponent } from './views/settings/hydroponic-settings/hydroponic-settings.component';
import { AccountSettingsComponent } from './views/settings/account-settings/account-settings.component';
import {SettingsModule} from './views/settings/settings.module';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    AlertModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  providers: [
    AccountService,
    HttpClientModule,
    authInterceptorProviders,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
