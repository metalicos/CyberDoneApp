import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SERVER} from '../backend-urls';
import {DeviceMetadataDto} from './device-metadata.service';

export interface DelegatedDeviceControlDto {
  id: number;
  delegatedUserUsername: string;
  comment: string;
  deviceMetadata: DeviceMetadataDto;
  delegationStatus: DelegationStatus;
  createdTimestamp: number[];
  updatedTimestamp: number[];
}

export interface PageableDelegatedDeviceControlDto {
  page: number;
  elementsOnThePage: number;
  totallyPages: number;
  totallyElements: number;
  content: DelegatedDeviceControlDto[];
}

export enum DelegationStatus {
  REQUESTED = 'REQUESTED',
  REJECTED = 'REJECTED',
  ALLOWED = 'ALLOWED'
}

@Injectable({
  providedIn: 'root'
})
export class DelegateDeviceControlService {

  constructor(private http: HttpClient) {
  }

  getDelegatedDeviceControlForUserByToken(page: number, size: number) {
    return this.http.get<PageableDelegatedDeviceControlDto>(SERVER.backendServerUrl + '/delegated-device-controls/self',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams()
          .set('page', page + '')
          .set('size', size + '')
      }
    );
  }

  getAllDelegatedDeviceControlByDeviceUuidAndOwnerToken(deviceUuid: string, delegatedStatus: DelegationStatus,
                                                        page: number, size: number, direction: string, sortBy: string) {
    return this.http.get<PageableDelegatedDeviceControlDto>(SERVER.backendServerUrl + '/delegated-device-controls/list',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams()
          .set('delegation-status', delegatedStatus)
          .set('device-uuid', deviceUuid)
          .set('page', page + '')
          .set('size', size + '')
          .set('direction', direction)
          .set('sortBy', sortBy)
      }
    );
  }

  getDelegatedDeviceControlForUser(username: string, delegatedStatus: DelegationStatus, deviceUuid: string) {
    return this.http.get<PageableDelegatedDeviceControlDto>(SERVER.backendServerUrl + '/delegated-device-controls',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams()
          .set('delegation-status', delegatedStatus)
          .set('device-uuid', deviceUuid)
          .set('username', username)
      }
    );
  }

  updateDelegationStatus(deviceUuid: string, username: string, delegatedStatus: DelegationStatus) {
    return this.http.put(SERVER.backendServerUrl + '/delegated-device-controls', {},
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams()
          .set('delegation-status', delegatedStatus)
          .set('device-uuid', deviceUuid)
          .set('username', username)
      }
    );
  }

  createDelegatedDeviceControl(comment: string, deviceUuid: string) {
    return this.http.post<DelegatedDeviceControlDto>(SERVER.backendServerUrl + '/delegated-device-controls', {},
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams()
          .set('comment', comment)
          .set('device-uuid', deviceUuid)
      }
    );
  }
}
