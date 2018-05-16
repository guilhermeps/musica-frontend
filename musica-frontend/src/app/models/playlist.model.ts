import { Usuario } from './usuario.model';
import { PlaylistMusicas } from './playlistMusicas.model';

export interface Playlist {
  id: String;
  playlistMusicas: PlaylistMusicas[];
  usuario: Usuario;
}
