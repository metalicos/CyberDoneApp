import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SERVER} from '../backend-urls';

export interface RegularScheduleDto {
  id: number;
  uuid: string;
  name: string;
  description: string;
  key: string;
  topic: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  time: number[];
  value: string;
  valueType: ValueType;
}

export interface RegularScheduleUpdateDto {
  id: number;
  name: string;
  description: string;
}

export enum ValueType {
  NUMBER = 'NUMBER',
  TEXT = 'TEXT',
  TIME = 'TIME',
  SWITCH = 'SWITCH',
  DIRECTION = 'DIRECTION',
  NONE = 'NONE'
}

@Injectable({
  providedIn: 'root'
})
export class DeviceScheduleService {

  constructor(private http: HttpClient) {
  }

  getSchedulesByKey(uuid: string, key: string) {
    return this.http.get<RegularScheduleDto[]>(SERVER.backendServerUrl + '/device/regular/schedules',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('key', key)
      }
    );
  }

  createSchedule(schedule: RegularScheduleDto) {
    return this.http.post<RegularScheduleDto>(SERVER.backendServerUrl + '/device/regular/schedules', schedule,
      {
        headers: SERVER.HEADERS,
      }
    );
  }

  updateScheduleMetaInfo(schedule: RegularScheduleUpdateDto) {
    return this.http.put<RegularScheduleUpdateDto>(SERVER.backendServerUrl + '/device/regular/schedules', schedule,
      {
        headers: SERVER.HEADERS,
      }
    );
  }

  deleteScheduleById(id: number) {
    return this.http.delete(SERVER.backendServerUrl + '/device/regular/schedules',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('id', String(id))
      }
    );
  }
}
