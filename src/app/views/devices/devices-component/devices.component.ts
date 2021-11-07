import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DeviceMetadataDto, DeviceService} from '../../../services/device.service';
import {AuthStorageService} from '../../../security/auth-storage.service';

@Component({
  selector: 'app-devices-component',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  sub: Subscription;
  hydroponicMetadataList: DeviceMetadataDto[];

  constructor(private authStorage: AuthStorageService,
              private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.generateLinkedDevicesList();
  }

  private generateLinkedDevicesList() {
    this.deviceService.getMetadataListByUser(this.authStorage.getUser().id).subscribe(
      data => {
        this.hydroponicMetadataList = data.filter(m => 'HYDROPONIC_V1'.toLowerCase() === m.deviceType.toLowerCase());
      });
    setTimeout(() => {
      this.sub.unsubscribe();
    }, 2000);
  }
}
