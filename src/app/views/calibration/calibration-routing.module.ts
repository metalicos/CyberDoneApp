import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HydroponicSensorCalibrationComponent} from './hydroponic-sensor-calibration/hydroponic-sensor-calibration.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Калібрування'
    },
    children: [
      {
        path: '',
        redirectTo: 'sensors/hydroponics'
      },
      {
        path: 'sensors/hydroponics/:uuid',
        component: HydroponicSensorCalibrationComponent,
        data: {
          title: 'Калібрування сенсора PH'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalibrationRoutingModule {
}
