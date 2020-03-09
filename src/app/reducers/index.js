import { combineReducers } from 'redux';
import { PLAY_TRACK } from '../actions/index';
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
