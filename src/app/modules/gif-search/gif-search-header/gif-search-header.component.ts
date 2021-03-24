import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gif-search-header',
  templateUrl: './gif-search-header.component.html',
  styleUrls: ['./gif-search-header.component.scss']
})
export class GifSearchHeaderComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  public searchTerm = '';

  constructor() {}

  ngOnInit(): void {}

  getGifs(): void {
    this.search.emit(this.searchTerm);
  }
}
