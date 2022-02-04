import {Component, OnDestroy} from '@angular/core';
import {AccountService, ChangePasswordDto} from '../../services/account.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnDestroy {
  private updatePasswordSub: any = null;
  private formChecker: any = null;

  changePasswordDto: ChangePasswordDto = {
    username: '',
    newPassword: '',
    checkNewPassword: ''
  };

  emailValidation: string = '';
  passwordValidation: string = '';
  errorAlert: any;
  dismissible = true;

  constructor(public accountService: AccountService,
              private router: Router) {
    console.log('CHANGE FORGOTTEN PASSWORD');
  }

  changePassword() {
    this.updatePasswordSub = this.accountService.changeForgotAccountPassword(this.changePasswordDto).subscribe(data => {
        if (data.match('OK')) {
          this.router.navigate(['/login']);
        } else {
          this.errorAlert = {
            type: 'danger',
            msg: `Помилка зміни паролю`
          };
        }
      }, err => {
        console.log('Change password error' + JSON.stringify(err));
        this.errorAlert = {
          type: 'danger',
          msg: `Помилка зміни паролю`
        };
      }
    );
  }


  ngOnDestroy(): void {
    if (this.updatePasswordSub != null) {
      this.updatePasswordSub.unsubscribe();
    }
  }
}
