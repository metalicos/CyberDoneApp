import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SERVER} from '../backend-urls';

export interface HydroponicSettingsDto {
  uuid: string;
  mlPerMillisecond: number;
  regulateErrorPh: number;
  regulateErrorFertilizer: number;
  phUpDoseMl: number;
  phDownDoseMl: number;
  fertilizerDoseMl: number;
  recheckDispensersAfterMs: number;
  setupPhValue: number;
  setupTdsValue: number;
  setupTemperatureValue: number;
  deviceEnable: boolean;
  dispensersEnable: boolean;
  sensorsEnable: boolean;
  restartCounter: number;
  wifiSSID: string;
  wifiPASS: string;
  isDispenserPhUpOpen: boolean;
  isDispenserPhDownOpen: boolean;
  isDispenserTdsOpen: boolean;
  autotime: boolean;
  timeZone: string;
  microcontrollerTime: number[];
}

@Injectable({
  providedIn: 'root'
})
export class HydroponicSettingsService {

  constructor(private http: HttpClient) {
  }

  getLastSettingsInDeviceWithUUID(uuid: string, page: number, limit: number) {
    return this.http.get<HydroponicSettingsDto[]>(SERVER.backendServerUrl + '/hydroponic/settings/last',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('page', String(page)).set('limit', String(limit))
      }
    );
  }
}
