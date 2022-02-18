import {Component, OnDestroy} from '@angular/core';
import {navItems} from '../../_nav';
import {AuthStorageService} from '../../security/auth-storage.service';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  sidebarMinimized = false;
  profileImage: string = 'data:image/png;base64,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';
  imageBase64: string = 'data:image/png;base64,';
  getAccountSub: Subscription;
  getAccountProfileImageSub: Subscription;
  navItems;

  constructor(public authStorageService: AuthStorageService,
              public accountService: AccountService,
              public router: Router) {
    if (!this.accountService.isAuthorised()) {
      this.accountService.init();
    }
    const user = this.authStorageService.getUserOrNavigate(this.router);
    if (user === null || user === undefined) {
      this.router.navigate(['/login']);
    }
    let rolesStr = '';
    user.roles.forEach(r => rolesStr += r.role.toLowerCase());
    this.navItems = navItems.filter(nav => {
      const menuRoles = nav.class.toLowerCase().split(',');
      return menuRoles.map(role => rolesStr.includes(role)).indexOf(true, 0) !== -1;
    });
    const accountImage = this.authStorageService.getAccountImage();
    if (accountImage !== null && accountImage !== undefined) {
      this.profileImage = this.imageBase64 + accountImage;
    }
    // const accountImage = this.authStorageService.getAccountImage();
    // if (accountImage !== null && accountImage !== undefined) {
    //   this.profileImage = this.imageBase64 + accountImage;
    // } else {
    //   this.getAccountProfileImageSub = accountService.getSelfAccountProfileImage(user.username).subscribe(profileImage => {
    //       this.profileImage = this.imageBase64 + profileImage;
    //       this.authStorageService.saveAccountImage(profileImage);
    //     }, err => this.router.navigate(['/login'])
    //   );
    // }
    // this.getAccountSub = accountService.getSelfAccount().subscribe(data => {
    //     let rolesStr = '';
    //     user.roles.forEach(r => rolesStr += r.role.toLowerCase());
    //     this.navItems = navItems.filter(nav => {
    //       const menuRoles = nav.class.toLowerCase().split(',');
    //       return menuRoles.map(role => rolesStr.includes(role)).indexOf(true, 0) !== -1;
    //     });
    //   }, error => {
    //     this.router.navigate(['/login']);
    //   }
    // );
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  ngOnDestroy(): void {
    if (this.getAccountSub != null) {
      this.getAccountSub.unsubscribe();
    }
    if (this.getAccountProfileImageSub != null) {
      this.getAccountProfileImageSub.unsubscribe();
    }
  }

}
