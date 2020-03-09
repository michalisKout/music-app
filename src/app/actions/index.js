export const PLAY_TRACK = 'PLAY_TRACK';

export const playTrack = trackId => {
  return { type: PLAY_TRACK, payload: { trackId } };
};
