import {Component, OnInit} from '@angular/core';
import {AuthStorageService} from '../../../security/auth-storage.service';
import {AccountDto, AccountService, ChangeFullNameDto} from '../../../services/account.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import {NAME_PATTERN} from '../../../services/validator-utils.service';
import {ErrorHandlerService} from '../../../services/error-handle.service';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent implements OnInit {
  errorAlert: any;
  imageBase64: string = 'data:image/png;base64,';
  profileImage: string;
  user: AccountDto;
  getAccountSub: Subscription;
  getAccountProfileImageSub: Subscription;
  fullNameForm: any;
  fullNameDto: ChangeFullNameDto;

  constructor(private fb: FormBuilder, private errorHandler: ErrorHandlerService, public authStorageService: AuthStorageService,
              public accountService: AccountService, public router: Router) {
    const accountImage = this.authStorageService.getAccountImage();
    if (accountImage !== null && accountImage !== undefined) {
      this.profileImage = this.imageBase64 + accountImage;
    }
    this.user = this.authStorageService.getUser();
    if (this.user == null) {
      this.router.navigate(['/login']);
    }
    this.fullNameForm = this.fb.group({
      username: [this.user.username, [Validators.required, Validators.email]],
      firstName: [this.user.firstName, [Validators.required, Validators.pattern(NAME_PATTERN)]],
      lastName: [this.user.lastName, [Validators.required, Validators.pattern(NAME_PATTERN)]],
      patronymic: [this.user.patronymic, [Validators.required, Validators.pattern(NAME_PATTERN)]]
    });
  }

  get firstName() {
    return this.fullNameForm.get('firstName');
  }

  get lastName() {
    return this.fullNameForm.get('lastName');
  }

  get patronymic() {
    return this.fullNameForm.get('patronymic');
  }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.getAccountSub = this.accountService.changeAccountProfileImage(this.user.username, formData).subscribe(
        data => {
          console.log('Image updated, status: ' + data);
          this.getAccountProfileImageSub = this.accountService.getSelfAccountProfileImage(this.user.username).subscribe(
            photo => {
              this.profileImage = this.imageBase64 + photo;
              this.authStorageService.saveAccountImage(photo);
              console.log('Image, received!');
              window.location.reload();
            }, err => this.errorAlert = this.errorHandler.handleError(err.status, err.error)
          );
        },
        err => this.errorAlert = this.errorHandler.handleError(err.status, err.error)
      );
    }
  }

  changeFullNameOnDisabled(disabled: boolean) {
    if (disabled) {
      this.getAccountSub = this.accountService.changeFullName(this.fullNameForm.value).subscribe(
        data => {
          console.log('Full name updated, status: ' + data);
          this.fullNameDto = this.fullNameForm.value;
          this.user.firstName = this.fullNameDto.firstName;
          this.user.lastName = this.fullNameDto.lastName;
          this.user.patronymic = this.fullNameDto.patronymic;
          this.authStorageService.saveUser(this.user);
        },
        err => this.errorAlert = this.errorHandler.handleError(err.status, err.error)
      );
    }
  }
}
