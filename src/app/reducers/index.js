import { combineReducers } from 'redux';
import { PLAY_TRACK, UPDATE_ALBUMS } from '../actions/index';
import {
  defaultAlbums,
  defaultTracks,
  defaultArtists
} from '../utils/defaultStoreMapper';

const albums = (albums = defaultAlbums, action) => {
  if (action.type === UPDATE_ALBUMS) {
    const updatedAlbums = action.payload.albums;
    return { ...albums, ...updatedAlbums };
  }
  return albums;
};

const tracks = (tracks = defaultTracks) => {
  return tracks;
};

const artists = (artists = defaultArtists) => {
  return artists;
};

const playerConfig = (state = { trackId: 0 }, action) => {
  if (action.type === PLAY_TRACK) {
    return { ...state, trackId: action.payload.trackId };
  }
  return state;
};

export default combineReducers({
  albums,
  tracks,
  artists,
  playerConfig
});
