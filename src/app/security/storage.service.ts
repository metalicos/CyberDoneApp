import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  protected clearAll() {
    localStorage.clear();
  }

  protected update(key: string, value: any): string {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
    return JSON.stringify(value);
  }

  protected get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
