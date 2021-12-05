import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SERVER} from '../backend-urls';

export interface HydroponicCalibrationDataDto {
  tdsCalibrationCoefficientValue: number;
  tdsOversampling: number;
  phCalibrationValuePoint: number;
  phCalibrationEtalonValue1: number;
  phCalibrationEtalonValue2: number;
  phCalibrationAdcValue1: number;
  phCalibrationAdcValue2: number;
  phCalibrationSlope: number;
  phCalibrationValueOffset: number;
  phOversampling: number;
  id: number;
  uuid: string;
  receiveTime: number[];
  microcontrollerTime: number[];
}

export interface HydroponicCustomizeDto {
  uuid: string;
  name: string;
  description: string;
}

export interface HydroponicDataDto {
  uuid: string;
  phValue: number;
  temperatureValue: number;
  ecValue: number;
  tdsValue: number;
  receiveTime: number[];
  microcontrollerTime: number[];
}

export interface HydroponicSettingsDto {
  uuid: string;
  mlPerMillisecond: number;
  regulateErrorPh: number;
  regulateErrorFertilizer: number;
  phUpDoseMl: number;
  phDownDoseMl: number;
  fertilizerDoseMl: number;
  recheckDispensersAfterMs: number;
  setupPhValue: number;
  setupTdsValue: number;
  setupTemperatureValue: number;
  deviceEnable: boolean;
  dispensersEnable: boolean;
  sensorsEnable: boolean;
  restartCounter: number;
  wifiSSID: string;
  wifiPASS: string;
  isDispenserPhUpOpen: boolean;
  isDispenserPhDownOpen: boolean;
  isDispenserTdsOpen: boolean;
  autotime: boolean;
  timeZone: string;
  microcontrollerTime: number[];
}

export interface HydroponicTimeDto {
  microcontrollerTime: number[];
  microcontrollerTimeZone: string;
  uuid: string;
}

export interface DeviceMetadataDto {
  id: number;
  uuid: string;
  name: string;
  description: string;
  deviceType: string;
  accessEnabled: boolean;
  userId: number;
}

export enum ValueType {
  NUMBER = 'NUMBER',
  TEXT = 'TEXT',
  TIME = 'TIME',
  SWITCH = 'SWITCH',
  DIRECTION = 'DIRECTION',
  NONE = 'NONE'
}

export interface RegularScheduleDto {
  id: number;
  uuid: string;
  name: string;
  description: string;
  key: string;
  topic: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  time: number[];
  value: string;
  valueType: ValueType;
}

export interface RegularScheduleUpdateDto {
  id: number;
  name: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) {
  }

  getLastCalibrationDataInDeviceWithUUID(uuid: string, page: number, limit: number) {
    return this.http.get<HydroponicCalibrationDataDto[]>(SERVER.backendServerUrl + '/hydroponic/calibration-data/last',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('page', String(page)).set('limit', String(limit))
      }
    );
  }

  deleteCalibrationDataInDeviceWithId(id: number) {
    return this.http.delete(SERVER.backendServerUrl + '/hydroponic/calibration-data',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('id', String(id))
      }
    );
  }

  getLastDataInDeviceWithUUID(uuid: string, page: number, limit: number) {
    return this.http.get<HydroponicDataDto[]>(SERVER.backendServerUrl + '/hydroponic/data/last',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('page', String(page)).set('limit', String(limit))
      }
    );
  }

  deleteAllDataInDeviceWithUUID(id: number) {
    return this.http.delete(SERVER.backendServerUrl + '/hydroponic/data',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('id', String(id))
      }
    );
  }

  getLastSettingsInDeviceWithUUID(uuid: string, page: number, limit: number) {
    return this.http.get<HydroponicSettingsDto[]>(SERVER.backendServerUrl + '/hydroponic/settings/last',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('page', String(page)).set('limit', String(limit))
      }
    );
  }

  updateTimeManually(dto: HydroponicTimeDto) {
    return this.http.post<HydroponicTimeDto>(SERVER.backendServerUrl + '/update/hydroponic/time', dto,
      {
        headers: SERVER.HEADERS,
      }
    );
  }

  updateZone(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/zone', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateAutotime(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/autotime', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhUpPumpStatus(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/pumps/phUp', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhDownPumpStatus(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/pumps/phDown', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateTdsPumpStatus(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/pumps/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  restart(uuid: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/restart', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  saveAllSettings(uuid: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/save', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  readAllSettings(uuid: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/read', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  calibrateTdsSensor(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/calibrate/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  clrCalibrationTdsSensor(uuid: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/calibrate/tds/clear', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  calibratePhLow(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/calibrate/ph/low', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  calibratePhHigh(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/calibrate/ph/high', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  clrCalibrationPhSensor(uuid: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/calibrate/ph/clear', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  updateSetupPhValue(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/setup/ph', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateSetupTdsValue(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/setup/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateRecheckDispensersAfterTime(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/dispensers/recheck-time', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhUpDose(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/dose/ph/up', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePhDownDose(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/dose/ph/down', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateFertilizerDose(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/dose/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateRegulatePhError(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/regulator/error/ph', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateRegulateTdsError(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/regulator/error/tds', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updatePumpSpeed(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/pump/speed', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateWifiSsid(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/wifi/ssid', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateWifiPassword(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/wifi/pass', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateSensorsEnable(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/enable/sensors', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  updateDispensersEnable(uuid: string, value: string) {
    return this.http.post(SERVER.backendServerUrl + '/update/hydroponic/enable/dispensers', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  getMetadataByUuid(uuid: string, value: string) {
    return this.http.get<DeviceMetadataDto>(SERVER.backendServerUrl + '/metadata',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('value', value)
      }
    );
  }

  getMetadataListByUser(userId: number) {
    return this.http.get<DeviceMetadataDto[]>(SERVER.backendServerUrl + '/device/metadata/list',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('userId', String(userId))
      }
    );
  }

  createMetadata(deviceMetadataDto: DeviceMetadataDto) {
    return this.http.post(SERVER.backendServerUrl + '/device/metadata', deviceMetadataDto,
      {
        headers: SERVER.HEADERS,
        params: new HttpParams()
      }
    );
  }

  updateMetadata(uuid: string, name: string, description: string) {
    return this.http.patch(SERVER.backendServerUrl + '/device/metadata', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('name', name).set('description', description)
      }
    );
  }

  deleteMetadata(uuid: string) {
    return this.http.delete(SERVER.backendServerUrl + '/device/metadata',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  getDeviceTypesList() {
    return this.http.get<string[]>(SERVER.backendServerUrl + '/device/metadata/device-types',
      {
        headers: SERVER.HEADERS,
      }
    );
  }

  unlinkDevice(uuid: string) {
    return this.http.put(SERVER.backendServerUrl + '/device/metadata/unlink', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid)
      }
    );
  }

  linkDevice(uuid: string, userId: number) {
    return this.http.put<string>(SERVER.backendServerUrl + '/device/metadata/link', {},
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('userId', String(userId))
      }
    );
  }

  getSchedulesByKey(uuid: string, key: string) {
    return this.http.get<RegularScheduleDto[]>(SERVER.backendServerUrl + '/schedules',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('uuid', uuid).set('key', key)
      }
    );
  }

  createSchedule(schedule: RegularScheduleDto) {
    return this.http.post<RegularScheduleDto>(SERVER.backendServerUrl + '/schedules', schedule,
      {
        headers: SERVER.HEADERS,
      }
    );
  }

  updateScheduleMetaInfo(schedule: RegularScheduleUpdateDto) {
    return this.http.patch<RegularScheduleUpdateDto>(SERVER.backendServerUrl + '/schedules', schedule,
      {
        headers: SERVER.HEADERS,
      }
    );
  }

  deleteScheduleById(id: number) {
    return this.http.delete(SERVER.backendServerUrl + '/schedules',
      {
        headers: SERVER.HEADERS,
        params: new HttpParams().set('id', String(id))
      }
    );
  }
}
