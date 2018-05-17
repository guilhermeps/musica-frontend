import { PlaylistMusicas } from './models/playlistMusicas.model';

import { Component } from '@angular/core';

import { Playlist } from './models/playlist.model';
import { Musica } from './models/musica.model';

import { MusicaService } from './musica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public musicasLista: Musica[];
  public playlist: Playlist;

  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
    this.playlist = new Playlist();
  }


  public buscarMusica(event) {
    if (event.keyCode == 13) {
        let filter = event.target.value;

        this.musicaService.getMusicas(filter).subscribe((musicas) => {
            this.musicasLista = musicas;
          }
        );
    }
  }

  public buscarPlaylist(event) {
    if (event.keyCode == 13) {
        let filter = event.target.value;

        this.musicaService.getPlaylist(filter).subscribe((playlist) => {
          this.playlist = playlist;
        }
      );
    }
  }

  public incluirMusicasPlaylist(event) {
    let musicasToAdd = this.musicasLista.filter(musica => musica.checked === true);
    let playListMusica = new PlaylistMusicas();

    for (let i = 0; i < musicasToAdd.length; i++) {
      this.musicaService.putPlaylist(this.playlist.id, musicasToAdd[i]).subscribe((resp) => {
        if (resp === 200) {
          playListMusica.musicaId = musicasToAdd[i].id;
          playListMusica.playlistId = this.playlist.id;
          playListMusica.musica = musicasToAdd[i];
          this.playlist.playlistMusicas.push(playListMusica);
        } else {
          console.log('deu ruim');
        }
      });
    }
    // console.log(this.musicasLista);
  }

  public removerMusicasPlaylist(event) {
    // console.log(this.musicasLista);
  }
}




