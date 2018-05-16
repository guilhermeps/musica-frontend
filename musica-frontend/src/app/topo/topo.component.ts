import { Playlist } from './../models/playlist.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MusicaService } from './../musica.service';
import { Musica } from '../models/musica.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  @Output() topoMusicSearch = new EventEmitter();
  @Output() topoPlaylistSearch = new EventEmitter();

  constructor() { }

  public musicas: Musica[];
  public playlist: Playlist;

  ngOnInit() {


  }
}
