import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthStorageService} from '../../../security/auth-storage.service';
import {DeviceMetadataDto, DeviceService} from '../../../services/device.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-remove-devices-component',
  templateUrl: './add-remove-devices.component.html',
  styleUrls: ['./add-remove-devices.component.scss']
})
export class AddRemoveDevicesComponent implements OnInit, OnDestroy {
  subscriptionMap = new Map<string, Subscription>();
  uuid: string = '';
  metadataList: DeviceMetadataDto[] = [];

  constructor(private authStorage: AuthStorageService,
              private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.generateLinkedDevicesList();
  }

  linkDeviceToUser() {
    this.subscriptionMap.set('LinkDeviceRequest',
      this.deviceService.linkDevice(this.uuid, this.authStorage.getUser().id)
        .subscribe(
          data => this.generateLinkedDevicesList(),
          err => this.generateLinkedDevicesList())
    );
  }

  unlinkDevice(uuid: string) {
    this.subscriptionMap.set('UnlinkDeviceRequest',
      this.deviceService.unlinkDevice(uuid)
        .subscribe(
          data => this.generateLinkedDevicesList(),
          err => this.generateLinkedDevicesList())
    );
  }

  private generateLinkedDevicesList() {
    this.subscriptionMap.set('GetLinkedDevicesRequest',
      this.deviceService.getMetadataListByUser(this.authStorage.getUser().id)
        .subscribe(data => this.metadataList = data)
    );
  }

  ngOnDestroy(): void {
    this.subscriptionMap.forEach(sub => {
      if (sub != null) {
        sub.unsubscribe();
      }
    });
  }
}
