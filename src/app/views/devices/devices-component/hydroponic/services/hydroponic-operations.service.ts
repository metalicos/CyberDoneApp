import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER} from '../../../../../backend-urls';

export interface TimeAndZone {
  microcontrollerTime: number[];
  microcontrollerTimeZone: string;
  UUID: string;
}

@Injectable({
  providedIn: 'root'
})
export class HydroponicOperationsService {

  constructor(private httpClient: HttpClient) {
  }

  updateZone(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/zone', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateWifiSsid(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/wifi/ssid', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateWifiPassword(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/wifi/pass', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateTime(time: TimeAndZone): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/time', time, {
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateRestartMicrocontroller(uuid: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/restart', {}, {
      params: new HttpParams().set('uuid', uuid),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateRestartCounter(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/restart-counter', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateRegulatorErrorTds(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/regulator/error/tds', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateRegulatorErrorPh(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/regulator/error/ph', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicPumpTds(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/pumps/tds', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicPumpPhUp(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/pumps/phUp', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicPumpPhDown(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/pumps/phDown', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicPumpSpeedMlPerMillisecond(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/pump/speed', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicEnableSensors(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/enable/sensors', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicEnableDispensers(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/enable/dispensers', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicDoseTds(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/dose/tds', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicDosePhUp(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/dose/ph/up', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicDosePhDown(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/dose/ph/down', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicDispensersRecheckTime(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/dispensers/recheck-time', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicAutotime(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/update/autotime', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicSetupTds(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/setup/tds', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicSetupPh(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/setup/ph', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicSaveSettings(uuid: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/save/settings', {}, {
      params: new HttpParams().set('uuid', uuid),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicReadSettings(uuid: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/read/settings', {}, {
      params: new HttpParams().set('uuid', uuid),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicCalibrateTds(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/calibrate/tds', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicCalibratePhHigh(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/calibrate/ph/high', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicCalibratePhLow(uuid: string, value: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/calibrate/ph/low', {}, {
      params: new HttpParams().set('uuid', uuid).set('value', value),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicCalibratePhClear(uuid: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/calibrate/ph/clear', {}, {
      params: new HttpParams().set('uuid', uuid),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }

  updateHydroponicCalibrateTdsClear(uuid: string): Observable<string> {
    return this.httpClient.put<string>(SERVER.backendServerUrl + '/hydroponic/control/calibrate/tds/clear', {}, {
      params: new HttpParams().set('uuid', uuid),
      headers: SERVER.CONTENT_TEXT_HEADERS
    });
  }
}
