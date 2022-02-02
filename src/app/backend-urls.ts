import {HttpHeaders} from '@angular/common/http';

export enum DirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class ServerGlobalConstants {
  public backendServerUrl: string = 'http://cyberdone.store:9090';
  public HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
  });
}

export const SERVER = new ServerGlobalConstants();
