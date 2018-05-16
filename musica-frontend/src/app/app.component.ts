
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
    console.log(this.musicasLista);
  }


  public buscarMusica(event) {
    if (event.keyCode == 13) {
        let filter = event.target.value;

        this.musicaService.getMusicas(filter).subscribe((musicas) => {
            this.musicasLista = musicas;
            console.log(musicas);
          }
        );
    }
  }

  public buscarPlaylist(event) {
    if (event.keyCode == 13) {

        let filter = event.target.value;

        this.musicaService.getPlaylist(filter).subscribe((playlist) => {
          this.playlist = playlist;
          console.log(playlist);
        }
      );
    }
  }

  public incluirMusicasPlaylist(event) {
    let itemsToAdd = this.musicasLista.filter(musica => musica.checked === true);

    for (let i = 0; i < itemsToAdd.length; i++) {
      console.log(this.playlist);
      this.musicaService.putPlaylist(this.playlist.id, itemsToAdd[i]).subscribe((resp) => {
        console.log(resp);
      });
    }
    // console.log(this.musicasLista);
  }

  public removerMusicasPlaylist(event) {
    // console.log(this.musicasLista);
  }
}




