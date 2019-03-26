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
      'Authorization':'Bearer BQBdEMm5kIdXCUKQQP7tNaA1tnsSybVvkRctN1WfYR9omHKBO_BcXIbQxjNU9PlYc6PoGByspWFlrzrnEcc'
    });
     return this.http.get(url,{headers});
  }

  constructor(private http:HttpClient) { }

  getNewRelease(){

    return this.getQuery('browse/new-releases')
                .pipe( map(data=> data['albums'].items));
  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe( map(data=> data['artists'].items));
  }

  getArtista(id:string){

    return this.getQuery(`artists/${id}`);
                //.pipe( map(data=> data['artists'].items));
  }

  getTopTraks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
                .pipe( map(data=> data['tracks']))
  }
}
