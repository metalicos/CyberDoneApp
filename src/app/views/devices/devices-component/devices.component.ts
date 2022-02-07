import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthStorageService} from '../../../security/auth-storage.service';
import {DeviceMetadataDto, DeviceMetadataService} from '../../../services/device-metadata.service';
import {HydroponicDataService} from '../../../services/hydroponic-data.service';

@Component({
  selector: 'app-devices-component',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy {
  sub: Subscription;
  hydroponicMetadataList: DeviceMetadataDto[];
  uuidMap: Map<string, string> = new Map<string, string>();

  constructor(private authStorage: AuthStorageService,
              private hydroData: HydroponicDataService,
              private deviceMeta: DeviceMetadataService) {
  }

  ngOnInit(): void {
    this.generateLinkedDevicesList();
  }

  private generateLinkedDevicesList() {
    const user = this.authStorage.getUser();
    if (user != null) {
      this.sub = this.deviceMeta.getMetadataListByUser(user.id).subscribe(
        data => {
          this.hydroponicMetadataList = data
            .filter(m => 'HYDROPONIC_V1'.toLowerCase() === m.deviceType.toLowerCase())
            .filter(m => {
              this.hydroData.getLastDataInDeviceWithUUID(m.uuid, 1, 1).subscribe(
                set => {
                  if (set.length === 1) {
                    this.uuidMap.set(set[0].uuid, set[0].uuid);
                    console.log(this.uuidMap);
                  }
                });
              return true;
            });
          setTimeout(() => {
            this.hydroponicMetadataList = this.hydroponicMetadataList
              .filter(m => m.uuid === this.uuidMap.get(m.uuid));
          }, 2000);
        });
    }
  }


  ngOnDestroy(): void {
    setTimeout(() => {
      this.sub.unsubscribe();
    }, 2000);
  }

  notNull(obj): boolean {
    return obj !== null;
  }
}
