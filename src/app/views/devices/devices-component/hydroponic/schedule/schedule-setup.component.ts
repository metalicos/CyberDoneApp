import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {Observable, OperatorFunction, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {HYDROPONIC_LABEL_TOPIC_MAP} from './hydroponic-topic-label-map';
import {DeviceScheduleService, RegularScheduleDto, ValueType} from '../../../../../services/device-schedule.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'schedule-setup',
  templateUrl: './schedule-setup.component.html',
})
export class ScheduleSetupComponent implements OnInit, OnDestroy {

  @Input() title: string = '';
  @Input() key: string = '';
  @Input() uuid: string = '';

  sub: Subscription;

  isCreateNewAutomationCollapsed: boolean = true;
  time: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  schedule: RegularScheduleDto = {
    id: 0,
    uuid: this.uuid,
    name: '',
    description: '',
    key: this.key,
    topic: '',
    monday: true,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    time: [0, 0, 0],
    value: '',
    valueType: ValueType.NONE
  };

  automation: string = '';

  constructor(private deviceSchedule: DeviceScheduleService) {
  }

  ngOnDestroy(): void {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }

  search: OperatorFunction<string, string[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 1 ? [] : Array.from(HYDROPONIC_LABEL_TOPIC_MAP.keys())
      .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

  ngOnInit(): void {
    this.schedule.uuid = this.uuid;
    this.schedule.key = this.key;
  }

  createSchedule() {
    this.schedule.time = [this.time.hour, this.time.minute, this.time.second];
    this.sub = this.deviceSchedule.createSchedule(this.schedule).subscribe(schedule => console.log(schedule));
  }

  isValueTypeEnabled(): boolean {
    const topicInfo = HYDROPONIC_LABEL_TOPIC_MAP.get(this.automation);
    this.schedule.valueType = (topicInfo == null ? ValueType.NONE : topicInfo.type);
    this.schedule.topic = (topicInfo == null ? '' : topicInfo.name);
    return !((topicInfo == null ? {name: '', type: ValueType.NONE} : topicInfo).type !== ValueType.NONE);
  }
}
