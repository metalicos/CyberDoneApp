import {Component, OnDestroy} from '@angular/core';
import {AuthService, LoginUserDto} from '../../security/auth.service';
import {TokenStorageService} from '../../security/token-storage.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnDestroy {

  private loginTokenSubscription: any = null;
  private userAccountSubscription: any = null;

  loginUserDto: LoginUserDto = {
    username: '',
    password: '',
  };

  constructor(public authService: AuthService,
              public userService: UserService,
              public tokenStorage: TokenStorageService,
              private router: Router) {
  }

  login() {
    this.loginTokenSubscription = this.authService.login(this.loginUserDto).subscribe(data => {
        this.tokenStorage.saveToken(data.authToken);
        this.userAccountSubscription = this.userService.getUserAccount(this.loginUserDto.username).subscribe(user => {
            JSON.stringify(this.tokenStorage.saveUser(user));
            if (this.authService.isAuthorised()) {
             // this.location.replace('/');
              this.router.navigate(['/dashboard']);
            }
          }, err => {
            console.log('Load User Error: user might not found or sth went wrong.' + JSON.stringify(err));
          }
        );
      }, err => {
        console.log('Authorization Error: problems with receiving JWT token...' + JSON.stringify(err));
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
