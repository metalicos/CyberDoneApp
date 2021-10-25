import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BACKEND} from '../backend-urls';
import {TokenStorageService} from './token-storage.service';

export interface Role {
  role: string;
}

export interface LoginUserDto {
  username: string;
  password: string;
}

export interface RegistrationUserDto {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  patronymic: string;
}

export interface AdminRegistrationUserDto {
  creatorToken: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  role: Role[];
}

export interface AccountDto {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  isEnabled: boolean;
  roles: Role[];
}

export interface TokenDto {
  authToken: string;
  tokenLiveTimeInSeconds: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  login(loginUserDto: LoginUserDto): Observable<TokenDto> {
    return this.http.post<TokenDto>(BACKEND.loginUrl_POST, loginUserDto, {headers: BACKEND.HEADERS});
  }

  registration(registrationUserDto): Observable<AccountDto> {
    return this.http.post<AccountDto>(BACKEND.createAccountUrl_POST, registrationUserDto, {headers: BACKEND.HEADERS});
  }

  isAuthorised(): boolean {
    return this.tokenStorage.getUser() != null || this.tokenStorage.getUser() !== null;
  }

  getUserAccount(email: string): Observable<AccountDto> {
    return this.http.get<AccountDto>(BACKEND.getAccountsUrl_GET,
      {
        headers: BACKEND.HEADERS,
        params: new HttpParams().set('username', email)
      });
  }
}
