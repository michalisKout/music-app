import React from 'react';
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

export default Albums;
