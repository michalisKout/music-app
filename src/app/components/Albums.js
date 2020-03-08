import React from 'react';
import AlbumContainer from '../containers/AlbumContainer';

const Albums = ({ albumIds }) => {
  return (
    <ul>
      {albumIds.map(albumId => {
        return <AlbumContainer key={albumId} albumId={albumId} />;
      })}
    </ul>
  );
};

export default Albums;
