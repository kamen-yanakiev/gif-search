import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { giphyApi } from './keys';

@Injectable({ providedIn: 'root' })
export class GiphyService {
  private url = 'http://api.giphy.com/v1/gifs/search';
  constructor(private http: HttpClient) {}

  getGifs(searchTerm?: string): Observable<string[]> {
    let queryParams = 'welcome';

    if (searchTerm.length > 0) {
      queryParams = searchTerm;
    }

    return this.http
      .get(`${this.url}?api_key=${giphyApi}&limit=30&q=${queryParams}`)
      .pipe(
        map((response) =>
          response['data'].map((gif) => gif.images.original.url)
        ),
        catchError((error) => {
          console.log('Error fetching data! Error: ', error);
          return of([]);
        })
      );
  }
}
