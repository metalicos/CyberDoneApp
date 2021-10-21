import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BACKEND} from '../backend-urls';

export interface Role {
  role: string;
}

export interface LoginUserDto {
  email: string;
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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) {
  }

  login(loginUserDto: LoginUserDto): Observable<any> {
    return this.http.post(BACKEND.loginUrl_POST, loginUserDto, {headers: BACKEND.HEADERS});
  }

  registration(registrationUserDto): Observable<any> {
    return this.http.post(BACKEND.createAccountUrl_POST, registrationUserDto, {headers: BACKEND.HEADERS});
  }
}
