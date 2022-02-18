import {Injectable} from '@angular/core';
import {AccountDto} from '../services/account.service';
import {StorageService} from './storage.service';

const TOKEN_KEY = 'AUTH-TOKEN';
const USER_KEY = 'AUTH-USER';
const ACCOUNT_IMAGE_KEY = 'ACCOUNT-IMAGE';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService extends StorageService {

  signOut(): void {
    super.update(TOKEN_KEY, '');
    super.update(USER_KEY, '');
  }

  init(): void {
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

  public saveAccountImage(accountImage: string): string {
    return super.update(ACCOUNT_IMAGE_KEY, accountImage);
  }

  public getAccountImage(): string {
    return super.get(ACCOUNT_IMAGE_KEY);
  }
}
