import { createDataSchema, album, artist } from '../service/dataMapperApi';
import initialState from './initialState.json';

const normalizedAlbums = createDataSchema(initialState.albums, album);
const normalizedArtists = createDataSchema(initialState.artists, artist);

export const defaultAlbums = {
  entities: normalizedAlbums.entities.albums,
  ids: normalizedAlbums.result
};

export const defaultArtists = {
  entities: normalizedArtists.entities.artists,
  ids: normalizedArtists.result
};

export const defaultTracks = {
  entities: normalizedAlbums.entities.tracks,
  ids: Object.keys(normalizedAlbums.entities.tracks)
};
