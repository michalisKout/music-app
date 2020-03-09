import React from 'react';
import PropTypes from 'prop-types';
import { CoverImage } from './commonComponents/CoverImage';
import { Title } from './commonComponents/Title';

const Track = ({ track, playTrack }) => {
  const { id, title, coverUrl } = track;
  return (
    <li
      className="track"
      onClick={() => {
        playTrack(id);
      }}
    >
      <CoverImage coverUrl={coverUrl} />
      <Title cssClass="track__title" text={title} />
    </li>
  );
};

Track.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired
  }),
  playTrack: PropTypes.func.isRequired
};

export default Track;
