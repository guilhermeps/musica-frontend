import { Usuario } from './usuario.model';
import { PlaylistMusicas } from './playlistMusicas.model';

export class Playlist {
  id: String;
  playlistMusicas: PlaylistMusicas[];
  usuario: Usuario;
}
