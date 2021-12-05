import {Component, OnDestroy} from '@angular/core';
import {navItems} from '../../_nav';
import {AuthStorageService} from '../../security/auth-storage.service';
import {AuthService} from '../../security/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public sidebarMinimized = false;
  public subscription: Subscription;
  public navItems;

  constructor(public storageService: AuthStorageService,
              public authService: AuthService,
              public router: Router) {
    if (!this.authService.isAuthorised()) {
      this.authService.init();
    }
    const user = this.storageService.getUser();
    this.subscription = authService.getUserAccount(user.username).subscribe(data => {
        console.log(data);
        let rolesStr = '';
        user.roles.forEach(r => rolesStr += r.role.toLowerCase());
        this.navItems = navItems.filter(nav => {
          const menuRoles = nav.class.toLowerCase().split(',');
          return menuRoles.map(role => rolesStr.includes(role)).indexOf(true, 0) !== -1;
        });
      }, error => {
        this.router.navigate(['/login']);
      }
    );
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  ngOnDestroy(): void {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

}
