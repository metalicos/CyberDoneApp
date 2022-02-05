import {Component, OnDestroy} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {AuthStorageService} from '../../security/auth-storage.service';
import {Router} from '@angular/router';
import {PASSWORD_PATTERN} from '../../services/validator-utils.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ErrorHandlerService} from '../../services/error-handle.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnDestroy {
  loginTokenSubscription: any = null;
  userAccountSubscription: any = null;
  errorAlert: any;
  logForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN), Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder, private errorHandler: ErrorHandlerService, public authService: AccountService,
              public tokenStorage: AuthStorageService, private router: Router) {
  }

  get username() {
    return this.logForm.get('username');
  }

  get password() {
    return this.logForm.get('password');
  }

  login() {
    this.loginTokenSubscription = this.authService.login(this.logForm.value).subscribe(data => {
        this.tokenStorage.saveToken(data.authToken);
        this.userAccountSubscription = this.authService.getUserAccount(this.logForm.get('username').value).subscribe(user => {
            this.tokenStorage.saveUser(user);
            if (this.authService.isAuthorised()) {
              this.router.navigate(['/']);
            }
          }, err => {
            this.errorAlert = {type: 'danger', msg: this.errorHandler.handleError(err.status, err.error)};
          }
        );
      }, err => {
        this.errorAlert = {type: 'danger', msg: this.errorHandler.handleError(err.status, err.error)};
      }
    );
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
