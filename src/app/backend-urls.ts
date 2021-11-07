import {HttpHeaders} from '@angular/common/http';

export enum DirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class ServerGlobalConstants {
  public backendServerUrl: string = 'http://192.168.1.100:9090';
  public HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
  });
}

export const SERVER = new ServerGlobalConstants();
