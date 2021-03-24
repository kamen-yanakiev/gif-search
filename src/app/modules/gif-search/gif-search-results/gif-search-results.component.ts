import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GiphyService } from '~app/services/gif.service';

@Component({
  selector: 'app-gif-search-results',
  templateUrl: './gif-search-results.component.html',
  styleUrls: ['./gif-search-results.component.scss'],
})
export class GifSearchResultsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() searchTerm = '';
  gifs: string[] = [];

  private destroy$ = new Subject();

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {
    this.getGifsData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getGifsData();
  }

  getGifsData(): void {
    this.giphyService
      .getGifs(this.searchTerm)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.gifs = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
