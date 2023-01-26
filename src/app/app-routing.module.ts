import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPage} from "@app/pages/main/main.page";

const routes: Routes = [
  {
    path: 'pl',
    component: MainPage
  },
  {
    path: 'en',
    component: MainPage
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
