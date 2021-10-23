import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BACKEND} from '../backend-urls';
import {Role} from '../security/auth.service';

export interface AccountDto {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  isEnabled: boolean;
  roles: Role[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) {
  }

  getUserAccount(email: string): Observable<AccountDto> {
    return this.http.get<AccountDto>(BACKEND.getAccountsUrl_GET,
      {
        headers: BACKEND.HEADERS,
        params: new HttpParams().set('username', email)
      });
  }

}
