import React from 'react';

const Albums = ({ albums }) => {
  return (
    <ul>
      {albums.map(album => {
        return (
          <li key={album.id} albumId={album.id}>
            {album.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Albums;
