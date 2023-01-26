import {Component} from '@angular/core';
import {combineLatest, Observable, of, timer} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly _weddingDate: Date = new Date(2023, 7, 12, 14, 0, 0);
  private readonly _currentDate: Date = new Date();
  private readonly _timer: Observable<number> = timer(0, 1000);

  public readonly secondsLeft: Observable<number> = combineLatest([
    of((this._weddingDate.getTime() - this._currentDate.getTime()) / 1000),
    this._timer
  ]).pipe(map(([difference, timer]) => difference - timer))


}
