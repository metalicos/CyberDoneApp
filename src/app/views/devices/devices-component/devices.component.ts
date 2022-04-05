import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthStorageService} from '../../../security/auth-storage.service';
import {DeviceMetadataDto, DeviceMetadataService} from '../../../services/device-metadata.service';
import {HydroponicDataService} from '../../../services/hydroponic-data.service';
import {ErrorHandlerService} from '../../../services/error-handle.service';

@Component({
  selector: 'app-devices-component',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy {
  deviceMetadataSub: Subscription;
  hydroDataSub: Subscription;
  hydroponicMetadataList: DeviceMetadataDto[];
  relayN4MetadataList: DeviceMetadataDto[];

  constructor(private authStorage: AuthStorageService,
              private hydroData: HydroponicDataService,
              private deviceMeta: DeviceMetadataService,
              private errorHandler: ErrorHandlerService) {
  }

  ngOnInit(): void {
    this.generateLinkedDevicesList();
  }

  private generateLinkedDevicesList() {
    const user = this.authStorage.getUser();
    if (user != null) {
      this.deviceMeta.getMetadataListByUser(user.id).toPromise().then(
        metadata => {
          const metadataArray = new Array<DeviceMetadataDto>(metadata.length);
          metadata.forEach(m => metadataArray.push(m));
          this.hydroponicMetadataList = metadataArray.filter(m => 'HYDROPONIC_V1'.toLowerCase() === m.deviceType.toLowerCase());
          console.log(this.hydroponicMetadataList);
          this.relayN4MetadataList = metadataArray.filter(m => 'RELAY_N4'.toLowerCase() === m.deviceType.toLowerCase());
          console.log(this.relayN4MetadataList);
        });
    }
  }

  ngOnDestroy(): void {
    setTimeout(() => {
      if (this.notNull(this.deviceMetadataSub)) {
        this.deviceMetadataSub.unsubscribe();
      }
      if (this.notNull(this.hydroDataSub)) {
        this.deviceMetadataSub.unsubscribe();
      }
    }, 2000);
  }

  notNull(obj): boolean {
    return obj !== null;
  }
}
