import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER} from '../backend-urls';
import {AuthStorageService} from './auth-storage.service';

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

  constructor(public http: HttpClient, private tokenStorage: AuthStorageService) {
  }

  login(loginUserDto: LoginUserDto): Observable<TokenDto> {
    return this.http.post<TokenDto>(SERVER.backendServerUrl + '/accounts/auth/login', loginUserDto, {headers: SERVER.HEADERS});
  }

  init() {
    this.tokenStorage.init();
  }

  registration(registrationUserDto): Observable<AccountDto> {
    return this.http.post<AccountDto>(SERVER.backendServerUrl + '/accounts', registrationUserDto, {headers: SERVER.HEADERS});
  }

  isAuthorised(): boolean {
    return this.tokenStorage.getUser() != null && this.tokenStorage.getUser() !== null && this.tokenStorage.getUser() !== undefined;
  }

  getUserAccount(email: string): Observable<AccountDto> {
    return this.http.get<AccountDto>(SERVER.backendServerUrl + '/accounts',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('username', email)
      });
  }
}
