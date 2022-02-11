import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER} from '../../../../../backend-urls';

export interface HydroponicOneData {
  uuid: string;
  receiveTime: number[];
  phValue: number;
  temperatureValue: number;
  ecValue: number;
  tdsValue: number;
  microcontrollerTime: number;
}

@Injectable({
  providedIn: 'root'
})
export class HydroponicDataService {

  constructor(private httpClient: HttpClient) {
  }

  getHydroponicData(uuid: string): Observable<HydroponicOneData> {
    return this.httpClient
      .get<HydroponicOneData>(SERVER.backendServerUrl + '/hydroponic/data/last',
        {params: new HttpParams().set('uuid', uuid), headers: SERVER.HEADERS});
  }

  getHydroponicDataLimitedList(uuid: string, limit: number): Observable<HydroponicOneData[]> {
    return this.httpClient
      .get<HydroponicOneData[]>(SERVER.backendServerUrl + '/hydroponic/data/last/' + limit,
        {params: new HttpParams().set('uuid', uuid), headers: SERVER.HEADERS});
  }
}

