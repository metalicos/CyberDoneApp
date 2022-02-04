import {Component, OnDestroy} from '@angular/core';
import {AccountService, RegistrationUserDto} from '../../services/account.service';
import {Router} from '@angular/router';
import {EMAIL_PATTERN, NAME_PATTERN, PASSWORD_PATTERN} from '../../validator-utils.service';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnDestroy {
  private registrationAction: any;
  private formChecker: any = null;
  passwordCheck: string = '';

  emailValidation: string = '';
  passwordValidation: string = '';
  errorAlert: any;
  dismissible = true;

  registrationDto: RegistrationUserDto = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    patronymic: ''
  };

  validationUsername: string = '';
  validationPassword: string = '';
  validationPasswordCheck: string = '';
  validationFirstName: string = '';
  validationLastName: string = '';
  validationPatronymic: string = '';

  constructor(public accountService: AccountService,
              private router: Router) {
    console.log('REGISTER');
  }

  registration() {
    if (this.registrationDto.firstName.match(NAME_PATTERN) && this.registrationDto.lastName.match(NAME_PATTERN) &&
      this.registrationDto.patronymic.match(NAME_PATTERN) && this.registrationDto.password.match(PASSWORD_PATTERN)) {

      this.registrationAction = this.accountService.registration(this.registrationDto).subscribe(data => {
          this.router.navigate(['/login']);
          console.log(data);
        }, err => {
          console.log('Registration Error' + JSON.stringify(err));
          this.errorAlert = {
            type: 'danger',
            msg: err.status === 405 ? 'Обліковий запис із поштою ' + this.registrationDto.username + ' вже існує.' : 'Помилка реєстрації'
          };
        }
      );

    } else {
      if (this.registrationDto.firstName !== '' && this.registrationDto.firstName.match(NAME_PATTERN)) {
        this.validationFirstName = 'is-valid';
      } else {
        this.validationFirstName = 'is-invalid';
      }

      if (this.registrationDto.lastName !== '' && this.registrationDto.lastName.match(NAME_PATTERN)) {
        this.validationLastName = 'is-valid';
      } else {
        this.validationLastName = 'is-invalid';
      }

      if (this.registrationDto.patronymic !== '' && this.registrationDto.patronymic.match(NAME_PATTERN)) {
        this.validationPatronymic = 'is-valid';
      } else {
        this.validationPatronymic = 'is-invalid';
      }

      if (this.registrationDto.username !== '' && this.registrationDto.username.match(EMAIL_PATTERN)) {
        this.validationUsername = 'is-valid';
      } else {
        this.validationUsername = 'is-invalid';
      }

      if (this.registrationDto.password !== '' && this.registrationDto.password.match(PASSWORD_PATTERN)) {
        this.validationPassword = 'is-valid';
      } else {
        this.validationPassword = 'is-invalid';
      }

      if (this.passwordCheck !== '' && this.registrationDto.password === this.passwordCheck) {
        this.validationPasswordCheck = 'is-valid';
        this.validationPassword = 'is-valid';
      } else {
        this.validationPasswordCheck = 'is-invalid';
        this.validationPassword = 'is-invalid';
      }
    }
  }

  ngOnDestroy() {
    if (this.registrationAction != null) {
      this.registrationAction.unsubscribe();
    }
    clearInterval(this.formChecker);
  }
}
