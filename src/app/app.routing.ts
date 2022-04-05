import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';

import {P404Component} from './views/error/404.component';
import {P500Component} from './views/error/500.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {ForgotPasswordComponent} from './views/forgotPassword/forgot-password.component';
import {LogoutComponent} from './views/logout/logout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'devices',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'сторінку не знайдено'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Помилка сервера'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Вхід в обліковий запис'
    }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: {
      title: 'Вихід із облікового запису'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Реєстрація'
    }
  },
  {
    path: 'change-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Зміна паролю'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Домівка'
    },
    children: [
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'devices',
        loadChildren: () => import('./views/devices/devices.module').then(m => m.DevicesModule)
      },
      {
        path: 'realtime',
        loadChildren: () => import('./views/realtime/realtime.module').then(m => m.RealtimeModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./views/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'automation',
        loadChildren: () => import('./views/automation/automation.module').then(m => m.AutomationModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./views/account/account.module').then(m => m.AccountModule)
      },
      {
        path: 'calibration',
        loadChildren: () => import('./views/calibration/calibration.module').then(m => m.CalibrationModule)
      },
    ]
  },
  {path: '**', component: P404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
