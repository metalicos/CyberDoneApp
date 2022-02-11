import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LinearChartComponent} from './linear-chart/linear-chart.component';
import {TableComponent} from './table/table.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'В реальному часі'
    },
    children: [
      {
        path: '',
        redirectTo: 'linear'
      },
      {
        path: 'charts/linear/hydroponics/:uuid/values/:type',
        component: LinearChartComponent,
        data: {
          title: 'Лінійний графік значень гідропоніки у реальному часі'
        }
      },
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: 'Таблиця'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealtimeRoutingModule {
}
