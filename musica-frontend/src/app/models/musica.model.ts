import { Artista } from './artista.model';

export interface Musica {
    id: String;
    nome: String;
    artista: Artista;
    artistaId: String;
    checked: Boolean;
}
