import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Musica } from './../models/musica.model';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {

  @Output() controleIncluirMusica = new EventEmitter();
  @Output() controleRemoverMusica = new EventEmitter();

  @Input() public musicaListaControle: Musica[];

  constructor() { }

  ngOnInit() {  }

}
