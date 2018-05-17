import { Artista } from './artista.model';

export class Musica {
    id: String;
    nome: String;
    artista: Artista;
    artistaId: String;
    checked: Boolean = false;
    isOnPlaylist: Boolean = false;
}
