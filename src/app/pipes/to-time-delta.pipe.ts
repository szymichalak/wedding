import {Pipe, PipeTransform} from '@angular/core';
import {TimeDelta} from "@app/models/time-delta";
import {secondsInDay, secondsInHour, secondsInMinute} from "@app/models/consts";

@Pipe({
  name: 'toTimeDelta',
})
export class ToTimeDeltaPipe implements PipeTransform {
  public transform(value: number | null): TimeDelta {
    if (!value) {
      return {days: 0, hours: 0, minutes: 0, seconds: 0};
    }

    const days: number = Math.floor(value / secondsInDay);
    value -= days * secondsInDay

    const hours: number = Math.floor(value / secondsInHour);
    value -= hours * secondsInHour;

    const minutes: number = Math.floor(value/ secondsInMinute);
    value -= minutes * secondsInMinute;

    const seconds: number = Math.floor(value);

    return {days, hours, minutes, seconds};
  }
}
