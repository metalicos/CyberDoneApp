import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DeviceMetadataDto, DeviceService} from '../../../services/device.service';
import {AuthStorageService} from '../../../security/auth-storage.service';

@Component({
  selector: 'app-devices-component',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy {

  sub: Subscription;
  hydroponicMetadataList: DeviceMetadataDto[];

  constructor(private authStorage: AuthStorageService,
              private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.generateLinkedDevicesList();
  }

  private generateLinkedDevicesList() {
    const user = this.authStorage.getUser();
    if (user != null) {
      this.sub = this.deviceService.getMetadataListByUser(user.id).subscribe(
        data => {
          this.hydroponicMetadataList = data.filter(m => 'HYDROPONIC_V1'.toLowerCase() === m.deviceType.toLowerCase());
        });
      setTimeout(() => {
        this.sub.unsubscribe();
      }, 2000);
    }
  }

  ngOnDestroy(): void {
  }
}
