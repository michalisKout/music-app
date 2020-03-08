import { normalize, schema } from 'normalizr';

const SERVER_URL = 'http://localhost:5500';
const DATA_TYPES = {
  ALBUMS: 'albums',
  ARTISTS: 'artists',
  TRACKS: 'tracks'
};

export const createDataSchema = (data, entity) => {
  return normalize(data, [entity]);
};

const createEntity = (name, options) => {
  return name && new schema.Entity(name, options && options);
};

export const artist = createEntity(DATA_TYPES.ARTISTS);
export const track = createEntity(DATA_TYPES.TRACKS, { assignedTo: artist });
export const album = createEntity(DATA_TYPES.ALBUMS, {
  tracks: [track]
});

const getUrl = dataType => `${SERVER_URL}/${dataType}`;

const normalizeData = async (dataType, entity) => {
  const data = await (await fetch(getUrl(dataType))).json();
  return createDataSchema(data, entity);
};

export const getAPINormalizedTracks = async () => {
  try {
    const normalizedAlbums = await normalizeData(DATA_TYPES.ALBUMS, album);
    return {
      entities: normalizedAlbums.entities.albums,
      ids: Object.keys(normalizedAlbums.result)
    };
  } catch (e) {
    throw new Error(e);
  }
};

export const getAPINormalizedData = async (dataType, entity) => {
  try {
    const normalizedData = await normalizeData(dataType, entity);

    return {
      entities: normalizedData.entities[dataType],
      ids: normalizedData.result
    };
  } catch (e) {
    throw new Error(e);
  }
};
