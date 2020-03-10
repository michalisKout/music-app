export const PLAY_TRACK = 'PLAY_TRACK';
export const UPDATE_ALBUMS = 'UPDATE_ALBUMS';

export const playTrack = trackId => {
  return { type: PLAY_TRACK, payload: { trackId } };
};

export const updateAlbums = albums => {
  return { type: UPDATE_ALBUMS, payload: { albums } };
};
