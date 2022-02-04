import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

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

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

@NgModule({
  imports: [
    FormsModule,
    FormsModule,
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
