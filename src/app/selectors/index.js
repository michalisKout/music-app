import { createSelector } from 'reselect';

export const getAlbums = state => state.albums;
export const getAlbumsEntities = state => getAlbums(state).entities;
export const getAlbumsIds = state => getAlbums(state).ids;

export const albumsSelector = createSelector([getAlbums], albums => {
  return albums;
});

export const albumsIdsSelector = createSelector([getAlbumsIds], ids => {
  return ids;
});
