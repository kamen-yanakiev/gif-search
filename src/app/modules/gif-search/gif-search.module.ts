import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifSearchComponent } from './gif-search.component';
import { GifSearchHeaderComponent } from './gif-search-header/gif-search-header.component';
import { GifSearchResultsComponent } from './gif-search-results/gif-search-results.component';
import { SharedModule } from '~app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    GifSearchComponent,
    GifSearchHeaderComponent,
    GifSearchResultsComponent
  ],
  exports: [GifSearchComponent]
})
export class GifSearchModule { }
