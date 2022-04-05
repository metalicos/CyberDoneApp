import {Component, OnDestroy} from '@angular/core';
import {AccountService, OauthAccountDto} from '../../services/account.service';
import {AuthStorageService} from '../../security/auth-storage.service';
import {Router} from '@angular/router';
import {PASSWORD_PATTERN} from '../../services/validator-utils.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ErrorHandlerService} from '../../services/error-handle.service';
import {Subscription} from 'rxjs';
// @ts-ignore
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';

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
  oauthAccount: OauthAccountDto;

  constructor(public fb: FormBuilder,
              public errorHandler: ErrorHandlerService,
              public accountService: AccountService,
              public authStorageService: AuthStorageService,
              public socialAuthService: SocialAuthService,
              public router: Router) {
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
          this.loginWithRetrievedToken(data.authToken);
        }, err => {
          this.errorAlert = this.errorHandler.handleError(err.status, err.error);
          this.loginSpinner = false;
        }
      );
    }
  }

  oauth(provider: string) {
    if ('google' === provider) {
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        data => {
          this.oauthAccount = {
            id: data.id,
            idToken: data.idToken,
            authToken: data.authToken,
            email: data.email,
            photoUrl: data.photoUrl,
            firstName: data.firstName,
            lastName: data.lastName,
            provider: data.provider
          };
          this.accountService.loginOauth(this.oauthAccount).subscribe(tokenDto => {
              this.loginWithRetrievedToken(tokenDto.authToken);
            }, err => {
              this.errorAlert = this.errorHandler.handleError(err.status, err.error);
              this.loginSpinner = false;
            }
          );
        }
      );
    }
    if ('facebook' === provider) {
      this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
        data => {
          this.oauthAccount = {
            id: data.id,
            idToken: data.idToken,
            authToken: data.authToken,
            email: data.email,
            photoUrl: data.photoUrl,
            firstName: data.firstName,
            lastName: data.lastName,
            provider: data.provider
          };
          this.accountService.loginOauth(this.oauthAccount).subscribe(tokenDto => {
              this.loginWithRetrievedToken(tokenDto.authToken);
            }, err => {
              this.errorAlert = this.errorHandler.handleError(err.status, err.error);
              this.loginSpinner = false;
            }
          );
        }
      );
    }
  }

  loginWithRetrievedToken(token: string) {
    this.authStorageService.saveToken(token);
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
