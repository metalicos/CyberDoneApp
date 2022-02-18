import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SERVER} from '../backend-urls';
import {Observable} from 'rxjs';

export interface HydroponicDataDto {
  uuid: string;
  phValue: number;
  temperatureValue: number;
  tdsValue: number;
  microcontrollerTime: number[];
  createdTimestamp: number[];
  updatedTimestamp: number[];
}

@Injectable({
  providedIn: 'root'
})
export class HydroponicDataService {

  constructor(private http: HttpClient) {
  }

  getLastDataInDeviceWithUUID(uuid: string, page: number, limit: number): Observable<HydroponicDataDto[]> {
    return this.http.get<HydroponicDataDto[]>(SERVER.backendServerUrl + '/hydroponic/data/last',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams()
          .set('uuid', uuid)
          .set('page', String(page))
          .set('limit', String(limit))
      }
    );
  }

  deleteAllDataInDeviceWithUUID(id: number) {
    return this.http.delete(SERVER.backendServerUrl + '/hydroponic/data',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams().set('id', String(id))
      }
    );
  }
}
