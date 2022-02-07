import {Component, OnDestroy} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';
import {PASSWORD_PATTERN} from '../../services/validator-utils.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ErrorHandlerService} from '../../services/error-handle.service';

@Component({
  templateUrl: 'forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnDestroy {
  updatePasswordSub: any;
  errorAlert: any;

  constructor(public fb: FormBuilder, public errorHandler: ErrorHandlerService,
              public accountService: AccountService, private router: Router) {
  }

  fpForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    newPassword: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN), Validators.minLength(8)]],
    checkNewPassword: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN), Validators.minLength(8)]]
  });

  get username() {
    return this.fpForm.get('username');
  }

  get newPassword() {
    return this.fpForm.get('newPassword');
  }

  get checkNewPassword() {
    return this.fpForm.get('checkNewPassword');
  }

  changePassword() {
    this.updatePasswordSub = this.accountService.changeForgotAccountPassword(this.fpForm.value).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        this.errorAlert = this.errorHandler.handleError(err.status, err.error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.updatePasswordSub != null) {
      this.updatePasswordSub.unsubscribe();
    }
  }
}
