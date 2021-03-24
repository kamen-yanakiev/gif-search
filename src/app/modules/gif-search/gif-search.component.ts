import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss']
})
export class GifSearchComponent implements OnInit {
  public searchTerm = '';

  constructor() { }

  ngOnInit(): void { }

  onSearch($event): void {
    this.searchTerm = $event;
  }

}
