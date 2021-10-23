import {HttpHeaders} from '@angular/common/http';

export enum DirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class ServerGlobalConstants {
  public HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  public backendServerUrl: string = 'http://192.168.1.100:9090';

  public getAccountsUrl_GET: string = this.backendServerUrl + '/accounts';
  public deleteAccountsUrl_DELETE: string = this.backendServerUrl + '/accounts';
  public createAccountUrl_POST: string = this.backendServerUrl + '/accounts';

  public changeAccountPasswordUrl_PUT: string = this.backendServerUrl + '/accounts/change/password';
  public changeAccountFullNameUrl_PUT: string = this.backendServerUrl + '/accounts/change/fullname';
  public changeAccountUsernameUrl_PUT: string = this.backendServerUrl + '/accounts/change/username';

  public loginUrl_POST: string = this.backendServerUrl + '/accounts/auth/login';
  public logoutUrl_POST: string = this.backendServerUrl + '/accounts/auth/logout';

  public getAccountsUrlWithPagination_GET(page: number, limit: number, sortBy: string, direction: DirectionEnum): string {
    return this.getAccountsUrl_GET + '/page/' + page + '/size/' + limit + '/sort-by/' + sortBy + '/direction/' + direction;
  }
}

export const BACKEND = new ServerGlobalConstants();




