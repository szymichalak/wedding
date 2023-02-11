import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {getLanguage} from "@app/selectors/params";
import {map} from "rxjs/operators";

@Component({
  templateUrl: 'main.page.html'
})
export class MainPage {
  public readonly language: Observable<string> = this._activatedRoute.params.pipe(map(getLanguage))
  public constructor(private readonly _activatedRoute: ActivatedRoute) {}
}
