import {Injectable} from '@angular/core';
import {LoginUserDto} from './auth.service';
import {AccountDto} from '../services/user.service';

const TOKEN_KEY = 'AUTH-TOKEN';
const USER_KEY = 'AUTH-USER';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): string {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
    return JSON.stringify(token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: AccountDto): string {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return JSON.stringify(user);
  }

  public getUser(): LoginUserDto {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }
}
