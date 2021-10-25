import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {ForgotPasswordComponent} from './views/forgotPassword/forgot-password.component';

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
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },

      {
        path: 'devices',
        loadChildren: () => import('./views/devices/devices.module').then(m => m.DevicesModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
