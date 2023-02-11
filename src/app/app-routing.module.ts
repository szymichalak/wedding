import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPage} from "@app/pages/main/main.page";
import {TranslationResolver} from "@app/resolvers/translation.resolver";

const routes: Routes = [
  {
    path: ':language',
    component: MainPage,
    resolve: {
      translation: TranslationResolver
    }
  },
  {
    path: '',
    redirectTo: 'pl',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
