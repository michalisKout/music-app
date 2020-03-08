import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({ album }) => {
  const { title, id, coverUrl } = album;

  return (
    <li>
      <Link to={{ pathname: `/albums/${id}`, state: { albumId: id } }}>
        <img src={`${coverUrl}`} alt="album-cover" />
        <div>{title}</div>
      </Link>
    </li>
  );
};

export default Album;
