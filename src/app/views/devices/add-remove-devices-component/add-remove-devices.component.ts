import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthStorageService} from '../../../security/auth-storage.service';
import {Subscription} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import {NAME_PATTERN, UUID_PATTERN} from '../../../services/validator-utils.service';
import {ErrorHandlerService} from '../../../services/error-handle.service';
import {DeviceMetadataDto, DeviceMetadataService} from '../../../services/device-metadata.service';

@Component({
  selector: 'app-add-remove-devices-component',
  templateUrl: './add-remove-devices.component.html',
  styleUrls: ['./add-remove-devices.component.scss']
})
export class AddRemoveDevicesComponent implements OnInit, OnDestroy {
  subscriptionMap = new Map<string, Subscription>();
  metadataList: DeviceMetadataDto[] = [];
  errorAlert: any;
  addForm: any;
  deviceMetadataForm: any;

  constructor(private fb: FormBuilder, private errorHandler: ErrorHandlerService,
              private authStorage: AuthStorageService, private deviceMeta: DeviceMetadataService) {
    this.deviceMetadataForm = this.fb.group({
      uuid: ['', [Validators.required, Validators.pattern(UUID_PATTERN)]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get uuid() {
    return this.deviceMetadataForm.get('uuid');
  }

  get name() {
    return this.deviceMetadataForm.get('name');
  }

  get description() {
    return this.deviceMetadataForm.get('description');
  }

  ngOnInit(): void {
    this.generateLinkedDevicesList();
    this.addForm = this.fb.group({
      uuid: ['', [Validators.required, Validators.pattern(UUID_PATTERN)]],
    });
  }

  linkDeviceToUser() {
    this.subscriptionMap.set('LinkDeviceRequest',
      this.deviceMeta.linkDevice(this.addForm.value.uuid, this.authStorage.getUser().id).subscribe(
        data => this.generateLinkedDevicesList(),
        err => {
          if (err.error.detail === undefined) {
            this.generateLinkedDevicesList();
            return;
          }
          this.errorAlert = this.errorHandler.handleError(err.status, err.error);
          this.generateLinkedDevicesList();
        })
    );
  }

  unlinkDevice(uuid: string) {
    this.subscriptionMap.set('UnlinkDeviceRequest',
      this.deviceMeta.unlinkDevice(uuid).subscribe(
        data => this.generateLinkedDevicesList(),
        err => {
          if (err.error.detail === undefined) {
            this.generateLinkedDevicesList();
            return;
          }
          this.errorAlert = this.errorHandler.handleError(err.status, err.error);
          this.generateLinkedDevicesList();
        })
    );
  }

  private generateLinkedDevicesList() {
    this.subscriptionMap.set('GetLinkedDevicesRequest',
      this.deviceMeta.getMetadataListByUser(this.authStorage.getUser().id).subscribe(
        data => this.metadataList = data,
        err => {
          console.log(err);
          this.errorAlert = this.errorHandler.handleError(err.status, err.error);
          this.generateLinkedDevicesList();
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionMap.forEach(sub => {
      if (sub != null) {
        sub.unsubscribe();
      }
    });
  }

  onDeviceImageSelected(uuid: string, $event: Event) {

  }
}
