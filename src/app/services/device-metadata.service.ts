import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SERVER} from '../backend-urls';

export interface DeviceMetadataDto {
  id: number;
  uuid: string;
  name: string;
  description: string;
  deviceImage: string;
  deviceType: string;
  accessEnabled: boolean;
  userId: number | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class DeviceMetadataService {

  constructor(private http: HttpClient) {
  }

  getMetadataByUuid(uuid: string, value: string) {
    return this.http.get<DeviceMetadataDto>(SERVER.backendServerUrl + '/device/metadata',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  getMetadataListByUser(userId: number) {
    return this.http.get<DeviceMetadataDto[]>(SERVER.backendServerUrl + '/device/metadata/list',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams().set('userId', String(userId))
      }
    );
  }

  createMetadata(deviceMetadataDto: DeviceMetadataDto) {
    return this.http.post<DeviceMetadataDto>(SERVER.backendServerUrl + '/device/metadata', deviceMetadataDto,
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams()
      }
    );
  }

  updateMetadata(uuid: string, name: string, description: string) {
    return this.http.put(SERVER.backendServerUrl + '/device/metadata', {},
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams().set('uuid', uuid).set('name', name).set('description', description)
      }
    );
  }

  updateDeviceImage(uuid: string, file: FormData) {
    return this.http.put<DeviceMetadataDto>(
      SERVER.backendServerUrl + '/device/metadata/' + uuid + '/image',
      file,
      {
        responseType: 'json'
      }
    );
  }

  deleteMetadata(uuid: string) {
    return this.http.delete(SERVER.backendServerUrl + '/device/metadata',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  getDeviceTypesList() {
    return this.http.get<string[]>(SERVER.backendServerUrl + '/device/metadata/device-types',
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
      }
    );
  }

  unlinkDevice(uuid: string) {
    return this.http.put(SERVER.backendServerUrl + '/device/metadata/unlink', {},
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  linkDevice(uuid: string, userId: number) {
    return this.http.put<string>(SERVER.backendServerUrl + '/device/metadata/link', {},
      {
        headers: SERVER.CONTENT_JSON_HEADERS,
        params: new HttpParams().set('uuid', uuid).set('userId', String(userId))
      }
    );
  }
}
