import {Component} from '@angular/core';
import {AuthStorageService} from '../../security/auth-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'logout.component.html'
})
export class LogoutComponent {

  constructor(public tokenStorage: AuthStorageService,
              private router: Router) {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }
}
