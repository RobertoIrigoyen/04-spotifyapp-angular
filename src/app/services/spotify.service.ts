import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBUFms1Oy0dBAboeM3tR5cwPjnJEL_vOIP-dvi3AoCdbt1Hodb8Mw-uSz1L8e2q8mvKauKMT07qwt0Sa7o'
    });
     return this.http.get(url,{headers});
  }

  constructor(private http:HttpClient) { }

  getNewRelease(){

    /*const headers = new HttpHeaders({
      'Authorization':'Bearer BQDnocw7HIljF0VjyEq4xF62PUZvAvdsaaPNumiug-U6m34Z6zMwx8rowyyOiDYmbVAhFjU8uwuANTC5kz8'
    });*/

    return this.getQuery('browse/new-releases')
                .pipe( map(data=> data['albums'].items));
  }

  getArtista(termino:string){
   /* const headers = new HttpHeaders({
      'Authorization':'Bearer BQDnocw7HIljF0VjyEq4xF62PUZvAvdsaaPNumiug-U6m34Z6zMwx8rowyyOiDYmbVAhFjU8uwuANTC5kz8'
    });*/

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe( map(data=> data['artists'].items));
  }
}
