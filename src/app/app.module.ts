import {NgModule, Provider, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {ToTimeDeltaPipe} from "@app/pipes/to-time-delta.pipe";
import {MainPage} from "@app/pages/main/main.page";
import {LocalizationModule, TranslatePipe} from "@marcura/marcura-localization";
import {TranslationResolver} from "@app/resolvers/translation.resolver";
import {HttpClientModule} from "@angular/common/http";
import {LangTranslatePipe} from "@app/pipes/lang-translate.pipe";
import {BackgroundComponent} from "@app/components/background/background.component";
import {NoteComponent} from "@app/components/note/note.component";
import {LIVE_HREF} from "@app/app.injectables";


const pages: Type<any>[] = [MainPage];
const components: Type<any>[] = [BackgroundComponent, NoteComponent];
const pipes: Type<any>[] = [ToTimeDeltaPipe, LangTranslatePipe];
const resolvers: Provider[] = [TranslationResolver, TranslatePipe];
const providers: Provider[] = [
  {
    provide: LIVE_HREF,
    useValue: 'https://przekazmszy.pl/kroscienko2'
  }
];

@NgModule({
  declarations: [
    AppComponent, ...pages ,...pipes, ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LocalizationModule.forRoot()
  ],
  providers: [...resolvers, ...providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
