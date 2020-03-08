import React from 'react';

const Album = ({ album }) => {
  return (
    <li>
      <img src={`${album.cover_url}`} alt="album-cover" />
      <div>{album.title}</div>
    </li>
  );
};

export default Album;
