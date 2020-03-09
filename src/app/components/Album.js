import React from 'react';
import PropTypes from 'prop-types';
import { CoverImage } from './commonComponents/CoverImage';
import { Title } from './commonComponents/Title';
import TrackContainer from '../containers/TrackContainer';

const Album = ({ album }) => {
  const { title, id, coverUrl, tracks } = album;
  const trackIds = tracks;
  const trackList = trackIds.map(trackId => (
    <TrackContainer key={trackId} trackId={trackId} />
  ));

  return (
    <div className="album" key={id}>
      <div className="album__info">
        <Title text={`Album Title: ${title}`} />
        <CoverImage coverUrl={coverUrl} />
      </div>
      <ul className="track-list">{trackList}</ul>
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};

export default Album;
