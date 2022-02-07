import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DeviceMetadataService} from '../../../../services/device-metadata.service';

@Component({
  selector: 'app-removable-item',
  templateUrl: './remove-item.component.html',
})
export class RemoveItemComponent implements OnInit, OnDestroy {
  subscriptionMap = new Map<string, Subscription>();
  @Input() uuid: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() additionalInfo: string = '';
  @Input() value: string = '';
  @Input() extraInfo: string = '';

  constructor(private deviceMeta: DeviceMetadataService) {
  }

  ngOnInit(): void {
  }

  unlinkDevice(uuid: string) {
    this.subscriptionMap.set('UnlinkDeviceRequest',
      this.deviceMeta.unlinkDevice(uuid).subscribe(data => {
        return data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionMap.forEach(sub => sub.unsubscribe());
  }
}
