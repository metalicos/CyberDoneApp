import {Component, OnInit} from '@angular/core';
import {AuthStorageService} from '../../../security/auth-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UUID_PATTERN} from '../../../services/validator-utils.service';
import {ErrorHandlerService} from '../../../services/error-handle.service';
import {DeviceMetadataDto, DeviceMetadataService} from '../../../services/device-metadata.service';
import {DelegateDeviceControlService, PageableDelegatedDeviceControlDto} from '../../../services/delegate-device-control.service';

@Component({
  selector: 'app-add-remove-devices-component',
  templateUrl: './add-remove-devices.component.html',
  styleUrls: ['./add-remove-devices.component.scss']
})
export class AddRemoveDevicesComponent implements OnInit {
  metadataList: DeviceMetadataDto[] = [];
  errorAlert: any;
  metadataFormMap: Map<DeviceMetadataDto, FormGroup> = new Map<DeviceMetadataDto, FormGroup>();
  deviceMetadataForm: any;
  delegateControlRequest: any;
  pageableDelegatedDevice: PageableDelegatedDeviceControlDto;
  elements: number = 2;
  page: number = 0;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  imageBase64: string = 'data:image/png;base64,';
  deviceImage: string = 'assets/img/photo-camera-squared.svg';

  constructor(private fb: FormBuilder, private errorHandler: ErrorHandlerService,
              private authStorage: AuthStorageService,
              private deviceMetadataService: DeviceMetadataService,
              private delegateDeviceControlService: DelegateDeviceControlService) {
    this.deviceMetadataForm = this.fb.group({
      uuid: ['', [Validators.required, Validators.pattern(UUID_PATTERN)]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    this.delegateControlRequest = this.fb.group({
      uuid: ['', [Validators.required, Validators.pattern(UUID_PATTERN)]],
      comment: ['Please grant permission to control the device.', [Validators.required]],
    });
  }

  get delegatedDeviceUuid() {
    return this.delegateControlRequest.get('uuid');
  }

  get delegatedDeviceComment() {
    return this.delegateControlRequest.get('comment');
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
  }

  linkDeviceToUser() {
    const form: DeviceMetadataDto = this.deviceMetadataForm.value;
    this.changeDeviceMetadataOnDisabled(true, form);
    this.deviceMetadataService.linkDevice(form.uuid, this.authStorage.getUser().id).toPromise().then(
      data => this.generateLinkedDevicesList(),
      err => {
        if (err.error.detail === undefined) {
          this.generateLinkedDevicesList();
          return;
        }
        this.errorAlert = this.errorHandler.handleError(err.status, err.error);
        this.generateLinkedDevicesList();
      });
  }

  unlinkDevice(uuid: string) {
    this.deviceMetadataService.unlinkDevice(uuid).toPromise().then(
      data => this.generateLinkedDevicesList(),
      err => {
        if (err.error.detail === undefined) {
          this.generateLinkedDevicesList();
          return;
        }
        this.errorAlert = this.errorHandler.handleError(err.status, err.error);
        this.generateLinkedDevicesList();
      });
  }

  private generateLinkedDevicesList() {
    this.deviceMetadataService.getMetadataListByUser(this.authStorage.getUser().id).toPromise().then(
      data => {
        this.metadataList = data;
        for (let i = 0; i < this.metadataList.length; i++) {
          const meta = this.metadataList[i];
          this.metadataFormMap.set(meta, this.fb.group({
            uuid: [meta.uuid, [Validators.required, Validators.pattern(UUID_PATTERN)]],
            name: [meta.name, [Validators.required]],
            description: [meta.description, [Validators.required]],
          }));
        }
      },
      err => {
        console.log(err);
        this.errorAlert = this.errorHandler.handleError(err.status, err.error);
        this.generateLinkedDevicesList();
      });


    this.delegateDeviceControlService.getDelegatedDeviceControlForUserByToken(this.page, this.elements).toPromise().then(
      data => {
        this.pageableDelegatedDevice = data;
        console.log(this.pageableDelegatedDevice);
      },
      err => {
        console.log(err);
        this.errorAlert = this.errorHandler.handleError(err.status, err.error);
        this.generateLinkedDevicesList();
      });
  }

  onDeviceImageAfterFormCompletionSelected(event) {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const form: DeviceMetadataDto = this.deviceMetadataForm.value;
      this.deviceMetadataService.updateDeviceImage(form.uuid, formData).toPromise().then(data => {
          this.deviceImage = this.imageBase64 + data.deviceImage;
        },
        err => this.errorAlert = this.errorHandler.handleError(err.status, err.error));
    }
  }

  changeDeviceImage(uuid: string, event) {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.deviceMetadataService.updateDeviceImage(uuid, formData).toPromise().then(
        data => this.generateLinkedDevicesList(),
        err => this.errorAlert = this.errorHandler.handleError(err.status, err.error));
    }
  }

  changeDeviceMetadataOnDisabled(disabled: boolean, meta: DeviceMetadataDto) {
    if (disabled) {
      this.deviceMetadataService.updateMetadata(meta.uuid, meta.name, meta.description).toPromise().then(
        data => this.generateLinkedDevicesList(),
        err => this.errorAlert = this.errorHandler.handleError(err.status, err.error));
    }
  }

  copyMessage(uuid: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = uuid;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  sendDelegatedControlRequest() {
    const form = this.delegateControlRequest.value;
    this.delegateDeviceControlService.createDelegatedDeviceControl(form.comment, form.uuid).toPromise().then(
      data => this.generateLinkedDevicesList(),
      err => this.errorAlert = this.errorHandler.handleError(err.status, err.error));
  }

  setDelegatedDeviceElementsOnPage(value: number) {
    this.elements = value;
    this.generateLinkedDevicesList();
  }

  delegatePaginationChange(event) {
    console.log(this.pageableDelegatedDevice.totallyPages);
    this.page = event - 1;
    this.generateLinkedDevicesList();
  }
}
