import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegularSingleValueAutomationComponent} from './regular-single-value-automation/regular-single-value-automation.component';
import {CalendarSingleValueAutomationComponent} from './calendar-single-value-automation/calendar-single-value-automation.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Автоматизація'
    },
    children: [
      {
        path: '',
        redirectTo: 'regular/single-value'
      },
      {
        path: 'regular/single-value',
        component: RegularSingleValueAutomationComponent,
        data: {
          title: 'Регулярне автоматичне виконання за єдиним значенням'
        }
      },
      {
        path: 'calendar/single-value',
        component: CalendarSingleValueAutomationComponent,
        data: {
          title: 'Календарне автоматичне виконання за єдиним значенням'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomationRoutingModule {
}
