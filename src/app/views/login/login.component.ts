import {Component, OnDestroy} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {AuthStorageService} from '../../security/auth-storage.service';
import {Router} from '@angular/router';
import {PASSWORD_PATTERN} from '../../services/validator-utils.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ErrorHandlerService} from '../../services/error-handle.service';
import {Subscription} from 'rxjs';

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
  imageBase64: string = 'data:image/png;base64,';
  getAccountProfileImageSub: Subscription;
  loginSpinner: boolean = false;

  constructor(private fb: FormBuilder, private errorHandler: ErrorHandlerService, public accountService: AccountService,
              public authStorageService: AuthStorageService, private router: Router) {
  }

  get username() {
    return this.logForm.get('username');
  }

  get password() {
    return this.logForm.get('password');
  }

  submitLogin() {
    this.login({keyCode: 13});
  }

  login(event: any) {
    if (event.keyCode === 13) {
      this.loginSpinner = true;
      this.loginTokenSubscription = this.accountService.login(this.logForm.value).subscribe(data => {
          console.log(data);
          this.authStorageService.saveToken(data.authToken);
          this.userAccountSubscription = this.accountService.getSelfAccount().subscribe(user => {
              this.authStorageService.saveUser(user);
              this.getAccountProfileImageSub = this.accountService.getSelfAccountProfileImage(user.username).subscribe(profileImage => {
                  this.authStorageService.saveAccountImage(profileImage);
                  if (this.accountService.isAuthorised()) {
                    this.router.navigate(['/']);
                  }
                }, err => {
                  console.log(err);
                  this.loginSpinner = false;
                }
              );
            }, err => {
              this.errorAlert = this.errorHandler.handleError(err.status, err.error);
              this.loginSpinner = false;
            }
          );
        }, err => {
          this.errorAlert = this.errorHandler.handleError(err.status, err.error);
          this.loginSpinner = false;
        }
      );
    }
  }

  ngOnDestroy(): void {
    if (this.loginTokenSubscription != null) {
      this.loginTokenSubscription.unsubscribe();
    }
    if (this.userAccountSubscription != null) {
      this.userAccountSubscription.unsubscribe();
    }
    if (this.getAccountProfileImageSub != null) {
      this.getAccountProfileImageSub.unsubscribe();
    }
  }
}
