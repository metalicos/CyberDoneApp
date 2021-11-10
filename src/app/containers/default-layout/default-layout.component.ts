import {Component} from '@angular/core';
import {navItems} from '../../_nav';
import {AuthStorageService} from '../../security/auth-storage.service';
import {AuthService} from '../../security/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems;

  constructor(public storageService: AuthStorageService,
              private authService: AuthService,
              private router: Router) {
    const user = this.storageService.getUser();
    authService.getUserAccount(user.username).subscribe(data => {
        console.log(data);
      }, error => {
        this.router.navigate(['/login']);
      }
    );
    let rolesStr = '';
    user.roles.forEach(r => rolesStr += r.role.toLowerCase());
    this.navItems = navItems.filter(nav => {
      const menuRoles = nav.class.toLowerCase().split(',');
      return menuRoles.map(role => rolesStr.includes(role)).indexOf(true, 0) !== -1;
    });
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

}
