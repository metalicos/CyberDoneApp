import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from '../../../../services/device.service';
import {Subscription} from 'rxjs';

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

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit(): void {
  }

  unlinkDevice(uuid: string) {
    this.subscriptionMap.set('UnlinkDeviceRequest',
      this.deviceService.unlinkDevice(uuid).subscribe(data => {
        return data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionMap.forEach(sub => sub.unsubscribe());
  }
}
