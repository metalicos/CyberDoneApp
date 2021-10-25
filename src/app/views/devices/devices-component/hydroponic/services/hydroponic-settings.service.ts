import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface HydroponicOneSettings {
  uuid: string;
  mlPerMillisecond: number;
  regulateErrorPhUp: number;
  regulateErrorPhDown: number;
  regulateErrorFertilizer: number;
  phUpDoseMl: number;
  phDownDoseMl: number;
  fertilizerDoseMl: number;
  recheckDosatorsAfterMs: number;
  setupPhValue: number;
  setupTdsValue: number;
  setupTemperatureValue: number;
  deviceEnable: boolean;
  dosatorsEnable: boolean;
  sensorsEnable: boolean;
  restartCounter: number;
  wifiSSID: string;
  wifiPASS: string;
  isDosatorPhUpOpen: boolean;
  isDosatorPhDownOpen: boolean;
  isDosatorTdsOpen: boolean;
  autotime: boolean;
  timeZone: string;
  microcontrollerTime: number[];
}

@Injectable({
  providedIn: 'root'
})
export class HydroponicSettingsService {

  httpHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  constructor(private httpClient: HttpClient) {
  }

  public getHydroponicSettings(uuid: string): Observable<HydroponicOneSettings> {
    return this.httpClient.get<HydroponicOneSettings>('http://192.168.1.100:5555/hydroponic/settings/last',
      {params: new HttpParams().set('uuid', uuid), headers: this.httpHeaders});
  }
}
