import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DeviceScheduleService, ValueType} from '../../../../../services/device-schedule.service';
import {ErrorHandlerService} from '../../../../../services/error-handle.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'schedule-element',
  templateUrl: './schedule-element.component.html'
})
export class ScheduleElementComponent implements OnInit, OnDestroy {

  @Input() id: number = 0;
  @Input() uuid: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() key: string = '';
  @Input() topic: string = '';
  @Input() topicLabels: Map<string, string> = new Map<string, string>();

  @Input() monday: boolean = false;
  @Input() tuesday: boolean = false;
  @Input() wednesday: boolean = false;
  @Input() thursday: boolean = false;
  @Input() friday: boolean = false;
  @Input() saturday: boolean = false;
  @Input() sunday: boolean = false;

  @Input() time: number[] = [0, 0, 0];
  @Input() value: string = '';
  @Input() valueType: ValueType = ValueType.NONE;

  sub: Subscription;


  constructor(private deviceSchedule: DeviceScheduleService,
              private errorHandler: ErrorHandlerService) {
  }

  ngOnInit(): void {
  }

  getLabelForValue(): string {
    if (this.valueType === ValueType.NONE) {
      return this.topicLabels.get(this.topic) + '';
    }
    if (this.valueType === ValueType.SWITCH) {
      this.value = (this.value === '1' ? 'Ввімк.' : 'Вимк.');
      return this.topicLabels.get(this.topic) + '';
    }
    if (this.valueType === ValueType.DIRECTION) {
      if (this.value === '-1') {
        this.value = ' Вліво';
        return this.topicLabels.get(this.topic) + '';
      }
      if (this.value === '0') {
        this.value = ' Зупинити';
        return this.topicLabels.get(this.topic) + '';
      }
      if (this.value === '1') {
        this.value = ' Вправо';
        return this.topicLabels.get(this.topic) + '';
      }
    }
    return this.topicLabels.get(this.topic) + '';
  }

  deleteSchedule(id: number) {
    this.sub = this.deviceSchedule.deleteScheduleById(id)
      .subscribe(
        data => console.log('Deleted'),
        err => this.errorHandler.handleError(err.status, err.error)
      );
  }

  ngOnDestroy(): void {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }
}
