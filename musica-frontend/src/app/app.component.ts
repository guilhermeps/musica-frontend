import { Component } from '@angular/core';
import _ from 'lodash';

import { Playlist } from './models/playlist.model';
import { Musica } from './models/musica.model';
import { PlaylistMusicas } from './models/playlistMusicas.model';

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


  private updateMusicStatus(musicAddedOnPlaylist: PlaylistMusicas) {
    if (this.musicasLista.length > 0) {
      let musica = this.musicasLista.find(m => m.id === musicAddedOnPlaylist.musicaId);
      if (musica !== undefined) {
        let index = this.musicasLista.indexOf(musica);
        this.musicasLista[index].isOnPlaylist = true;
      }
    }
  }

  private configuraListaDeMusicas() {
    // configura todas as músicas como não contidas em nenhuma playlist
    this.musicasLista.forEach(m => {
      m.checked = false;
      m.isOnPlaylist = false;
    });

    // verifica se a playlist tem alguma música da lista, caso tenha, atualiza o status da música
    this.playlist.playlistMusicas.forEach(p => {
      this.updateMusicStatus(p);
    });
  }

  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
    this.playlist = new Playlist();
    this.musicasLista = [];
  }


  public buscarMusica(event) {
    if (event.keyCode == 13) {
        let filter = event.target.value;

        this.musicaService.getMusicas(filter).subscribe((musicas) => {

          this.musicasLista = musicas;

          this.configuraListaDeMusicas();
        });
    }
  }

  public buscarPlaylist(event) {
    if (event.keyCode == 13) {
        let filter = event.target.value;

        this.musicaService.getPlaylist(filter).subscribe((playlist) => {
          this.playlist = playlist;
          this.configuraListaDeMusicas();
        });
    }
  }

  public incluirMusicasPlaylist(event) {
    let musicasToAdd = this.musicasLista.filter(musica => musica.checked === true && musica.isOnPlaylist === false);
    let playListMusica = new PlaylistMusicas();

    for (let i = 0; i < musicasToAdd.length; i++) {
      this.musicaService.putPlaylist(this.playlist.id, musicasToAdd[i]).subscribe((resp) => {
        if (resp === 200) {
          playListMusica.musicaId = musicasToAdd[i].id;
          playListMusica.playlistId = this.playlist.id;
          playListMusica.musica = musicasToAdd[i];
          this.playlist.playlistMusicas.push(playListMusica);

          this.updateMusicStatus(playListMusica);
        } else {
          console.log('deu ruim');
        }
      });
    }
  }

  public removerMusicasPlaylist(event) {

  }
}




