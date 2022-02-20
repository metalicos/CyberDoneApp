import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountProfileComponent} from './account-profile/account-profile.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Обліковий запис'
    },
    children: [
      {
        path: '',
        redirectTo: 'profile'
      },
      {
        path: 'profile',
        component: AccountProfileComponent,
        data: {
          title: 'Налаштування облікового запису'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
