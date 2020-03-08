import { combineReducers } from 'redux';
import {
  defaultAlbums,
  defaultTracks,
  defaultArtists
} from '../utils/defaultStoreMapper';

const albums = (albums = defaultAlbums) => {
  return albums;
};

const tracks = (tracks = defaultTracks) => {
  return tracks;
};

const artists = (artists = defaultArtists) => {
  return artists;
};

export default combineReducers({
  albums,
  tracks,
  artists
});
