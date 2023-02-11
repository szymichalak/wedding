import {Params} from "@angular/router";

export function getLanguage(params: Params): string {
  return params.language;
}
