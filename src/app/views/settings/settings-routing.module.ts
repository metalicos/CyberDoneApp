import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {HydroponicSettingsComponent} from './hydroponic-settings/hydroponic-settings.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Налаштування'
    },
    children: [
      {
        path: '',
        redirectTo: 'account/my'
      },
      {
        path: 'account/my',
        component: AccountSettingsComponent,
        data: {
          title: 'Налаштування облікового запису'
        }
      },
      {
        path: 'devices/hydroponics/:uuid',
        component: HydroponicSettingsComponent,
        data: {
          title: 'Налаштування гідропоніки'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
