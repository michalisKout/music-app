import React from 'react';
import PropTypes from 'prop-types';
import AlbumLinkContainer from '../containers/AlbumLinkContainer';

const Albums = ({ albumIds }) => {
  return (
    <ul>
      {albumIds.map(albumId => {
        return <AlbumLinkContainer key={albumId} albumId={albumId} />;
      })}
    </ul>
  );
};

Albums.propTypes = {
  albumIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default React.memo(Albums);
