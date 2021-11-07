import {Component, OnDestroy} from '@angular/core';
import {AuthService, LoginUserDto} from '../../security/auth.service';
import {AuthStorageService} from '../../security/auth-storage.service';
import {Router} from '@angular/router';
import {EMAIL_PATTERN, PASSWORD_PATTERN} from '../../validator-utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnDestroy {

  private loginTokenSubscription: any = null;
  private userAccountSubscription: any = null;
  private formChecker: any = null;
  loginUserDto: LoginUserDto = {
    username: '',
    password: '',
  };
  emailValidation: string = '';
  passwordValidation: string = '';
  errorAlert: any;
  dismissible = true;

  constructor(public authService: AuthService,
              public tokenStorage: AuthStorageService,
              private router: Router) {
  }

  login() {
    if (this.loginUserDto.username.match(EMAIL_PATTERN) && this.loginUserDto.password.match(PASSWORD_PATTERN)) {
      this.loginTokenSubscription = this.authService.login(this.loginUserDto).subscribe(data => {
          this.tokenStorage.saveToken(data.authToken);
          this.userAccountSubscription = this.authService.getUserAccount(this.loginUserDto.username).subscribe(user => {
              JSON.stringify(this.tokenStorage.saveUser(user));
              if (this.authService.isAuthorised()) {
                this.router.navigate(['/']);
              }
            }, err => {
              console.log('Load User Error: user might not found or sth went wrong.' + JSON.stringify(err));
              this.errorAlert = {
                type: 'danger',
                msg: `Помилка входу: E-mail або пароль введені неправильно`
              };
            }
          );
        }, err => {
          console.log('Authorization Error: problems with receiving JWT token...' + JSON.stringify(err));
          this.errorAlert = {
            type: 'danger',
            msg: `Помилка входу: E-mail або пароль введені неправильно`
          };
        }
      );
    } else {
      if (this.loginUserDto.username.match(EMAIL_PATTERN)) {
        this.emailValidation = 'is-valid';
      } else {
        this.emailValidation = 'is-invalid';
      }

      if (this.loginUserDto.password.match(PASSWORD_PATTERN)) {
        this.passwordValidation = 'is-valid';
      } else {
        this.passwordValidation = 'is-invalid';
      }
    }
  }

  ngOnDestroy(): void {
    if (this.loginTokenSubscription != null) {
      this.loginTokenSubscription.unsubscribe();
    }
    if (this.userAccountSubscription != null) {
      this.userAccountSubscription.unsubscribe();
    }
  }
}
