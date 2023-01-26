import {NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {ToTimeDeltaPipe} from "@app/pipes/to-time-delta.pipe";
import {MainPage} from "@app/pages/main/main.page";


const pages: Type<any>[] = [MainPage];
const pipes: Type<any>[] = [ToTimeDeltaPipe];

@NgModule({
  declarations: [
    AppComponent, ...pages ,...pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
