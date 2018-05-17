
import { Component, OnInit, Input, Output } from '@angular/core';
import { Playlist } from './../models/playlist.model';
import { Musica } from '../models/musica.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  @Input() @Output() playlist: Playlist;

  constructor() { }

  ngOnInit() { }

  checkedMusic(musica: Musica) {
    musica.checked = !musica.checked;
  }
}
