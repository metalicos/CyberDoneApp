import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SERVER} from '../backend-urls';

export interface HydroponicTimeDto {
  microcontrollerTime: number[];
  microcontrollerTimeZone: string;
  uuid: string;
}

@Injectable({
  providedIn: 'root'
})
export class HydroponicControlService {

  constructor(private http: HttpClient) {
  }

  updateTimeManually(dto: HydroponicTimeDto) {
    return this.http.put<HydroponicTimeDto>(SERVER.backendServerUrl + '/hydroponic/control/update/time', dto,
      {
        headers: SERVER.HEADERS,
      }
    );
  }

  updateZone(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/zone', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateAutotime(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/autotime', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhUpPumpStatus(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/pumps/phUp', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhDownPumpStatus(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/pumps/phDown', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateTdsPumpStatus(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/pumps/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  restart(uuid: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/restart', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  saveAllSettings(uuid: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/save/settings', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  readAllSettings(uuid: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/read/settings', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  calibrateTdsSensor(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/calibrate/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  clrCalibrationTdsSensor(uuid: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/calibrate/tds/clear', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  calibratePhLow(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/calibrate/ph/low', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  calibratePhHigh(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/calibrate/ph/high', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  clrCalibrationPhSensor(uuid: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/calibrate/ph/clear', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  updateSetupPhValue(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/setup/ph', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateSetupTdsValue(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/setup/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateRecheckDispensersAfterTime(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/dispensers/recheck-time', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhUpDose(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/dose/ph/up', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhDownDose(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/dose/ph/down', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateFertilizerDose(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/dose/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateRegulatePhError(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/regulator/error/ph', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateRegulateTdsError(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/regulator/error/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePumpSpeed(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/pump/speed', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateWifiSsid(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/wifi/ssid', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateWifiPassword(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/wifi/pass', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateSensorsEnable(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/enable/sensors', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateDispensersEnable(uuid: string, value: string) {
    return this.http.put(SERVER.backendServerUrl + '/hydroponic/control/update/enable/dispensers', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }
}
