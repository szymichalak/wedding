import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ILocalization, LocalizationService} from "@marcura/marcura-localization";
import {read} from "@app/models/observable/read";
import {HttpClient} from "@angular/common/http";
import {getLanguage} from "@app/selectors/params";

@Injectable()
export class TranslationResolver implements Resolve<void> {
  public constructor(private readonly _localizationService: LocalizationService, private readonly _httpClient: HttpClient) {}

  public async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void> {
    const language: string = getLanguage(route.params)
    this._localizationService.localization = await read(
      this._httpClient.get<ILocalization>(`/assets/i18n/${language}.json`)
    );
  }
}
