import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddRemoveDevicesComponent} from './add-remove-devices-component/add-remove-devices.component';
import {DevicesComponent} from './devices-component/devices.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Пристрої'
    },
    children: [
      {
        path: '',
        redirectTo: 'my'
      },
      {
        path: 'my',
        component: DevicesComponent,
        data: {
          title: 'Мої пристрої'
        }
      },
      {
        path: 'add-remove',
        component: AddRemoveDevicesComponent,
        data: {
          title: 'Додати-Видалити пристрій'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule {
}
