import {Injectable} from '@angular/core';
import {AccountDto} from '../services/account.service';
import {StorageService} from './storage.service';

const DEVICE_UUID = 'UUID';
const DEVICE_ID = 'ID';
const USER_KEY = 'AUTH-USER';
const TOKEN_KEY = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class DeviceStorage extends StorageService {

  signOut(): void {
    super.update(TOKEN_KEY, '');
    super.update(USER_KEY, '');
  }

  public saveToken(token: string): string {
    return super.update(TOKEN_KEY, token);
  }

  public getToken(): string {
    return super.get(TOKEN_KEY);
  }

  public saveUser(user: AccountDto): string {
    return super.update(USER_KEY, user);
  }

  public getUser(): AccountDto {
    return super.get(USER_KEY);
  }
}
