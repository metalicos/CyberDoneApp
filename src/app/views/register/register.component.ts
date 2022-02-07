import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NAME_PATTERN, PASSWORD_PATTERN} from '../../services/validator-utils.service';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';
import {ErrorHandlerService} from '../../services/error-handle.service';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnDestroy {
  registrationSub: any;
  errorAlert: any;

  get firstName() {
    return this.regForm.get('firstName');
  }

  get lastName() {
    return this.regForm.get('lastName');
  }

  get patronymic() {
    return this.regForm.get('patronymic');
  }

  get password() {
    return this.regForm.get('password');
  }

  get username() {
    return this.regForm.get('username');
  }

  get passwordCheck() {
    return this.regForm.get('passwordCheck');
  }

  constructor(public fb: FormBuilder, public errorHandler: ErrorHandlerService,
              public accountService: AccountService, public router: Router) {
  }

  regForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
    lastName: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
    patronymic: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN), Validators.minLength(8)]],
    passwordCheck: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN), Validators.minLength(8)]]
  });

  completeRegistration() {
    this.registrationSub = this.accountService.registration(this.regForm.value).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        this.errorAlert = this.errorHandler.handleError(err.status, err.error);
      }
    );
  }

  ngOnDestroy() {
    if (this.registrationSub != null) {
      this.registrationSub.unsubscribe();
    }
  }
}
