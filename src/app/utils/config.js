export const DEFAULT_ALBUM = {
  title: '',
  cover_url: ''
};
export const SERVER_URL = 'http://localhost:5500';
export const DATA_TYPES = {
  ALBUMS: 'albums',
  ARTISTS: 'artists',
  TRACKS: 'tracks'
};

export const UPDATE_TIME_EVENT = 'timeupdate';
export const DEBOUNCE_TIME = 500;
export const THROTTLE_TIME = 100;
export const debouchConfig = { maxWait: 1500 };
export const ERROR_MESSAGES = {
  LOAD: 'Music Player is still loading the track...',
  NO_TRACK: 'Please select a track to play...'
};
