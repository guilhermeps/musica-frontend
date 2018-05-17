import { Component, OnInit, Input, Output } from '@angular/core';

import { Musica } from './../models/musica.model';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  public checkMusic: Boolean;
  constructor() { }

  @Input() @Output() musicas: Musica[];

  ngOnInit() {  }

  checkedMusic(musica: Musica) {
    musica.checked = !musica.checked;
  }
}
