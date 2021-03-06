import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
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
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
