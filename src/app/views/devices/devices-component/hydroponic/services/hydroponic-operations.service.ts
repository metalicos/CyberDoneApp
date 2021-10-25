import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface TimeAndZone {
  microcontrollerTime: number[];
  microcontrollerTimeZone: string;
  UUID: string;
}

export interface Metadata {
  id: number;
  uuid: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class HydroponicOperationsService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  private serverUrl = 'http://192.168.1.100:5555';

  constructor(private httpClient: HttpClient) {
  }

  controlHydroponicPhUpPump(uuid: string, direction: string) {
    return this.httpClient
      .get(this.serverUrl + '/update/pumps/phUp/' + direction, {
        params: new HttpParams().set('uuid', uuid),
        headers: this.httpHeaders
      }).subscribe();
  }

  controlHydroponicPhDownPump(uuid: string, direction: string) {
    return this.httpClient
      .get(this.serverUrl + '/update/pumps/phDown/' + direction, {
        params: new HttpParams().set('uuid', uuid),
        headers: this.httpHeaders
      }).subscribe();
  }

  controlHydroponicTdsPump(uuid: string, direction: string) {
    return this.httpClient
      .get(this.serverUrl + '/update/pumps/tds/' + direction, {
        params: new HttpParams().set('uuid', uuid),
        headers: this.httpHeaders
      }).subscribe();
  }

  updateSetupValues(uuid: string, setupTdsValue: string, setupPhValue: string) {
    this.httpClient.get(this.serverUrl + '/update/setup/ph', {
      params: new HttpParams().set('uuid', uuid).set('value', setupPhValue),
      headers: this.httpHeaders
    }).subscribe();
    this.httpClient.get(this.serverUrl + '/update/setup/tds', {
      params: new HttpParams().set('uuid', uuid).set('value', setupTdsValue),
      headers: this.httpHeaders
    }).subscribe();
  }

  updateErrorValues(uuid: string, phError: string, tdsError: string) {
    this.httpClient.get(this.serverUrl + '/update/regulator/error/ph', {
      params: new HttpParams().set('uuid', uuid).set('value', phError),
      headers: this.httpHeaders
    }).subscribe();
    this.httpClient.get(this.serverUrl + '/update/regulator/error/tds', {
      params: new HttpParams().set('uuid', uuid).set('value', tdsError),
      headers: this.httpHeaders
    }).subscribe();
  }

  updateDosingValues(uuid: string, phUpDoseMl: string, phDownDoseMl: string,
                     fertilizerDoseMl: string, recheckDosatorsAfterMs: string) {
    this.httpClient.get(this.serverUrl + '/update/dose/ph/up', {
      params: new HttpParams().set('uuid', uuid).set('value', phUpDoseMl),
      headers: this.httpHeaders
    }).subscribe();
    this.httpClient.get(this.serverUrl + '/update/dose/ph/down', {
      params: new HttpParams().set('uuid', uuid).set('value', phDownDoseMl),
      headers: this.httpHeaders
    }).subscribe();
    this.httpClient.get(this.serverUrl + '/update/dose/tds', {
      params: new HttpParams().set('uuid', uuid).set('value', fertilizerDoseMl),
      headers: this.httpHeaders
    }).subscribe();
    this.httpClient.get(this.serverUrl + '/update/recheck-time', {
      params: new HttpParams().set('uuid', uuid).set('value', recheckDosatorsAfterMs),
      headers: this.httpHeaders
    }).subscribe();
  }

  updateWifiValues(uuid: string, wifiSSID: string, wifiPASS: string) {
    this.httpClient.get(this.serverUrl + '/update/wifi/ssid', {
      params: new HttpParams().set('uuid', uuid).set('value', wifiSSID),
      headers: this.httpHeaders
    }).subscribe();
    this.httpClient.get(this.serverUrl + '/update/wifi/pass', {
      params: new HttpParams().set('uuid', uuid).set('value', wifiPASS),
      headers: this.httpHeaders
    }).subscribe();
  }

  calibratePhLow(uuid: string, phLowCalibration: string) {
    this.httpClient.get(this.serverUrl + '/update/calibrate/ph/low', {
      params: new HttpParams().set('uuid', uuid).set('value', phLowCalibration),
      headers: this.httpHeaders
    }).subscribe();
  }

  calibratePhHigh(uuid: string, phHighCalibration: string) {
    this.httpClient.get(this.serverUrl + '/update/calibrate/ph/high', {
      params: new HttpParams().set('uuid', uuid).set('value', phHighCalibration),
      headers: this.httpHeaders
    }).subscribe();
  }

  calibrateTds(uuid: string, tdsCalibration: string) {
    this.httpClient.get(this.serverUrl + '/update/calibrate/tds', {
      params: new HttpParams().set('uuid', uuid).set('value', tdsCalibration),
      headers: this.httpHeaders
    }).subscribe();
  }

  updateMetadata(uuid: string, name: string, description: string) {
    this.httpClient.post<Metadata>(this.serverUrl + '/metadata', {}, {
      params: new HttpParams().set('uuid', uuid).set('name', name).set('description', description),
      headers: this.httpHeaders
    }).subscribe();
  }

  getMetadata(uuid: string): Observable<Metadata> {
    return this.httpClient.get<Metadata>(this.serverUrl + '/metadata', {
      params: new HttpParams().set('uuid', uuid),
      headers: this.httpHeaders
    });
  }

  deleteMetadata(uuid: string) {
    this.httpClient.delete(this.serverUrl + '/metadata', {
      params: new HttpParams().set('uuid', uuid),
      headers: this.httpHeaders
    }).subscribe();
  }

  calibratePhClear(uuid: string) {
    this.httpClient.get(this.serverUrl + '/update/calibrate/ph/clear', {
      params: new HttpParams().set('uuid', uuid),
      headers: this.httpHeaders
    }).subscribe();
  }

  calibrateTdsClear(uuid: string) {
    this.httpClient.get(this.serverUrl + '/update/calibrate/tds/clear', {
      params: new HttpParams().set('uuid', uuid),
      headers: this.httpHeaders
    }).subscribe();
  }

  updateDateTime(time: TimeAndZone) {
    this.httpClient.post<TimeAndZone>(this.serverUrl + '/update/time', time, {headers: this.httpHeaders})
      .subscribe();
  }

  updateZone(uuid: string, zone: string) {
    this.httpClient.get<string>(this.serverUrl + '/update/zone', {
      params: new HttpParams().set('uuid', uuid).set('value', zone), headers: this.httpHeaders
    }).subscribe();
  }

  updateAutoTimeSetting(uuid: string, autotime: string) {
    this.httpClient.get<string>(this.serverUrl + '/update/autotime', {
      params: new HttpParams().set('uuid', uuid).set('value', autotime), headers: this.httpHeaders
    }).subscribe();
  }

  updateEnableDosators(uuid: string, value: string) {
    this.httpClient.get<string>(this.serverUrl + '/update/enable/dosators', {
      params: new HttpParams().set('uuid', uuid).set('value', value), headers: this.httpHeaders
    }).subscribe();
  }

  updateEnableSensors(uuid: string, value: string) {
    this.httpClient.get<string>(this.serverUrl + '/update/enable/sensors', {
      params: new HttpParams().set('uuid', uuid).set('value', value), headers: this.httpHeaders
    }).subscribe();
  }

  updateEnableDevice(uuid: string, value: string) {
    this.httpClient.get<string>(this.serverUrl + '/update/enable/device', {
      params: new HttpParams().set('uuid', uuid).set('value', value), headers: this.httpHeaders
    }).subscribe();
  }
}
