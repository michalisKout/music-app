import React from 'react';
import PropTypes from 'prop-types';

const PlayerButton = ({ content, cssClass, handler }) => {
  return (
    <span className={cssClass} onClick={handler}>
      {content}
    </span>
  );
};

PlayerButton.propTypes = {
  content: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
  handler: PropTypes.func
};

export default React.memo(PlayerButton);
