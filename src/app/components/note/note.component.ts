import {Component, Inject, Input} from "@angular/core";
import {combineLatest, Observable, of, timer} from "rxjs";
import {map} from "rxjs/operators";
import {LIVE_HREF} from "@app/app.injectables";

@Component({
  selector: 'app-note',
  templateUrl: 'note.component.html',
  styleUrls: ['note.component.scss']
})
export class NoteComponent {
  private readonly _weddingDate: Date = new Date(Date.UTC(2023, 7, 12, 13, 0, 0));
  private readonly _currentDate: Date = new Date();
  private readonly _timer: Observable<number> = timer(0, 1000);

  public readonly secondsLeft: Observable<number> = combineLatest([
    of(Math.round((this._weddingDate.getTime() - this._currentDate.getTime()) / 1000)),
    this._timer
  ]).pipe(map(([difference, timer]) => difference - timer));

  @Input() public language: string | null = null;

  public constructor(@Inject(LIVE_HREF) public readonly liveHref: string) {}
}
