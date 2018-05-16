
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Musica } from './models/musica.model';
import { Playlist } from './models/playlist.model';

const API_URL = "https://intense-ocean-93206.herokuapp.com";

@Injectable()
export class MusicaService {

  constructor(private http: Http) {
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  // API: GET /Prato
  public getMusicas(musica): Observable<Musica[]>  {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    const options = new RequestOptions({ headers: headers });

    // will use this.http.get()
    return this.http
    .get(API_URL + '/api/musicas/?filtro=' + musica)
    .map(response => {
      const pratos = response.json();
      return response.json();
    })
    .catch(this.handleError);
  }

  public getPlaylist(usuario): Observable<Playlist> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    const options = new RequestOptions({ headers: headers });

    // will use this.http.get()
    return this.http
    .get(API_URL + '/api/playlists/?user=' + usuario)
    .map(response => {
      const pratos = response.json();
      return response.json();
    })
    .catch(this.handleError);
  }

  public putPlaylist(playlistId: String, musica: Musica): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    const options = new RequestOptions({ headers: headers });
    let musicaJson = JSON.stringify(musica);

    return this.http
    .put(API_URL + '/api/playlists/' + playlistId + '/musicas', musicaJson, { headers: headers })
    .map(response => {
      return response.json();
    })
    .catch(this.handleError);
  }



}
