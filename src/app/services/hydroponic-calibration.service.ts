import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SERVER} from '../backend-urls';

export interface HydroponicCalibrationDataDto {
  id: number;
  uuid: string;
  tdsCalibrationCoefficientValue: number;
  tdsOversampling: number;
  phCalibrationValuePoint: number;
  phCalibrationEtalonValue1: number;
  phCalibrationEtalonValue2: number;
  phCalibrationAdcValue1: number;
  phCalibrationAdcValue2: number;
  phCalibrationSlope: number;
  phCalibrationValueOffset: number;
  phOversampling: number;
  microcontrollerTime: number[];
  createdTimestamp: number[];
  updatedTimestamp: number[];
}

@Injectable({
  providedIn: 'root'
})
export class HydroponicCalibrationService {

  constructor(private http: HttpClient) {
  }

  getLastCalibrationDataInDeviceWithUUID(uuid: string, page: number, limit: number) {
    return this.http.get<HydroponicCalibrationDataDto[]>(SERVER.backendServerUrl + '/hydroponic/calibration-data/last',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams().set('uuid', uuid).set('page', String(page)).set('limit', String(limit))
      }
    );
  }

  deleteCalibrationDataInDeviceWithId(id: number) {
    return this.http.delete(SERVER.backendServerUrl + '/hydroponic/calibration-data',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams().set('id', String(id))
      }
    );
  }
}
