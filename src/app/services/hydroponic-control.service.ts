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
    return this.http.post<HydroponicTimeDto>(SERVER.backendServerUrl + '/update/hydroponic/time', dto,
      {
        headers: SERVER.HEADERS,
      }
    );
  }

  updateZone(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/zone', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateAutotime(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/autotime', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhUpPumpStatus(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/pumps/phUp', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhDownPumpStatus(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/pumps/phDown', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateTdsPumpStatus(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/pumps/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  restart(uuid: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/restart', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  saveAllSettings(uuid: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/save', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  readAllSettings(uuid: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/read', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  calibrateTdsSensor(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/calibrate/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  clrCalibrationTdsSensor(uuid: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/calibrate/tds/clear', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  calibratePhLow(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/calibrate/ph/low', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  calibratePhHigh(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/calibrate/ph/high', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  clrCalibrationPhSensor(uuid: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/calibrate/ph/clear', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  updateSetupPhValue(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/setup/ph', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateSetupTdsValue(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/setup/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateRecheckDispensersAfterTime(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/dispensers/recheck-time', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhUpDose(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/dose/ph/up', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhDownDose(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/dose/ph/down', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateFertilizerDose(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/dose/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateRegulatePhError(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/regulator/error/ph', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateRegulateTdsError(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/regulator/error/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePumpSpeed(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/pump/speed', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateWifiSsid(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/wifi/ssid', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateWifiPassword(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/wifi/pass', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateSensorsEnable(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/enable/sensors', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateDispensersEnable(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/enable/dispensers', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }
}
