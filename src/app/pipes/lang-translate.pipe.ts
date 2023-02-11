import {Pipe, PipeTransform} from '@angular/core';
import {TranslatePipe} from "@marcura/marcura-localization";

@Pipe({
  name: 'langTranslate',
})
export class LangTranslatePipe implements PipeTransform {
  public constructor(private readonly _sgTranslate: TranslatePipe) {}

  public transform(value: string, language: string): string {
    return this._sgTranslate.transform(value)
  }
}
