import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SERVER} from '../backend-urls';

export interface HydroponicDataDto {
  uuid: string;
  phValue: number;
  temperatureValue: number;
  ecValue: number;
  tdsValue: number;
  receiveTime: number[];
  microcontrollerTime: number[];
}

@Injectable({
  providedIn: 'root'
})
export class HydroponicDataService {

  constructor(private http: HttpClient) {
  }

  getLastDataInDeviceWithUUID(uuid: string, page: number, limit: number) {
    return this.http.get<HydroponicDataDto[]>(SERVER.backendServerUrl + '/hydroponic/data/last',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('page', String(page)).set('limit', String(limit))
      }
    );
  }

  deleteAllDataInDeviceWithUUID(id: number) {
    return this.http.delete(SERVER.backendServerUrl + '/hydroponic/data',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('id', String(id))
      }
    );
  }
}
