import React from 'react';
import PropTypes from 'prop-types';

const SongTitle = ({ track, cssClass }) => {
  return (
    <span className={cssClass}>
      Song Playing: {track ? track.title : '---'}
    </span>
  );
};

SongTitle.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    coverUrl: PropTypes.string
  })
};

export default SongTitle;
