import {Component, Input} from '@angular/core';
import {AuthService, LoginUserDto} from '../../security/auth.service';
import {TokenStorageService} from '../../security/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  loginUserDto: LoginUserDto = {
    email: '',
    password: '',
  };

  constructor(public router: Router,
              public authService: AuthService,
              public tokenStorage: TokenStorageService) {
    console.log(router.config);
  }

  login() {
    console.log('------------------------------');
    console.log(this.loginUserDto);
    console.log('------------------------------');
    this.authService.login(this.loginUserDto).subscribe(
      data => {
        this.tokenStorage.saveToken(data);
        console.log(data);
      },
      err => {
        console.log('Error: ' + err.httpRequestStatusCode);
        console.log(err);
      }
    );
  }
}
