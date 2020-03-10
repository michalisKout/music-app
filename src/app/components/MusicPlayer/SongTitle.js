import React from 'react';
import PropTypes from 'prop-types';

const SongTitle = ({ track, cssClass, loading }) => {
  const shouldShowSongTitle = loading
    ? 'Track is loading...'
    : `Song Playing: ${track ? track.title : '---'}`;

  return <span className={cssClass}>{shouldShowSongTitle}</span>;
};

SongTitle.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    coverUrl: PropTypes.string
  }),
  cssClass: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default React.memo(SongTitle);
