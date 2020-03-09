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
    id: PropTypes.string,
    coverUrl: PropTypes.string
  })
};

export default React.memo(SongTitle);
