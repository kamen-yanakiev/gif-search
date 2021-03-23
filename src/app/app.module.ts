import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifSearchModule } from './modules/gif-search/gif-search.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
