import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GiphyService } from '~app/services/gif.service';

import { McfModal } from '@accelya/sdk/mcf-modal';

@Component({
  selector: 'app-gif-search-results',
  templateUrl: './gif-search-results.component.html',
  styleUrls: ['./gif-search-results.component.scss'],
})
export class GifSearchResultsComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('mcfModal', { static: true }) mcfModal: McfModal;
  @Input() searchTerm = '';
  gifs: string[] = [];
  selectedGif = '';

  private destroy$ = new Subject();

  constructor(
    private giphyService: GiphyService
    ) {}

  ngOnInit(): void {
    this.getGifsData();
  }

  ngOnChanges(): void {
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

  showModal(gif) {
    this.mcfModal.isVisible = true;
    this.selectedGif = gif;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
