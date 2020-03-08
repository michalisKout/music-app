import React from 'react';

const Album = ({ album }) => {
  const { title, id, coverUrl, tracks } = album;

  return (
    <div key={id}>
      This is the album {title} image : {coverUrl} and tracks : {tracks}
    </div>
  );
};

export default Album;
