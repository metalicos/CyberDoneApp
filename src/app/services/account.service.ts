import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER} from '../backend-urls';
import {AuthStorageService} from '../security/auth-storage.service';

export interface Role {
  role: string;
}

export interface LoginUserDto {
  username: string;
  password: string;
}

export interface ChangePasswordDto {
  username: string;
  newPassword: string;
  checkNewPassword: string;
}

export interface RegistrationUserDto {
  username: string;
  password: string;
  passwordCheck: string;
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
export class AccountService {

  constructor(public http: HttpClient, private tokenStorage: AuthStorageService) {
  }

  login(loginUserDto: LoginUserDto): Observable<TokenDto> {
    return this.http.post<TokenDto>(SERVER.backendServerUrl + '/accounts/authentication/login', loginUserDto, {headers: SERVER.HEADERS});
  }

  init() {
    this.tokenStorage.init();
  }

  registration(registrationUserDto): Observable<AccountDto> {
    return this.http.post<AccountDto>(SERVER.backendServerUrl + '/accounts/registration', registrationUserDto, {headers: SERVER.HEADERS});
  }

  isAuthorised(): boolean {
    return this.tokenStorage.getUser() != null && this.tokenStorage.getUser() !== null && this.tokenStorage.getUser() !== undefined;
  }

  getUserAccount(email: string): Observable<AccountDto> {
    return this.http.get<AccountDto>(SERVER.backendServerUrl + '/accounts/' + email, {headers: SERVER.HEADERS});
  }

  changeForgotAccountPassword(changePassDto: ChangePasswordDto): Observable<string> {
    return this.http.put<string>(
      SERVER.backendServerUrl + '/accounts/change/password',
      changePassDto,
      {headers: SERVER.HEADERS}
    );
  }
}
