import {HttpHeaders} from '@angular/common/http';

export enum DirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class ServerGlobalConstants {
  public backendServerUrl: string = 'http://cyberdone.store:9090';
  public CONTENT_JSON_HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  public MULTIPART_DATA_HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  public CONTENT_TEXT_HEADERS = new HttpHeaders({
    'Content-Type': 'text/plain;charset=UTF-8',
  });
}

export const SERVER = new ServerGlobalConstants();
