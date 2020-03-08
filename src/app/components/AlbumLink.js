import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({ album }) => {
  const { title, id, coverUrl } = album;

  return (
    <li>
      <Link to={{ pathname: `/albums/${id}`, state: { albumId: id } }}>
        <img src={`${coverUrl}`} alt="album-cover" />
        <h3>{title}</h3>
      </Link>
    </li>
  );
};

export default Album;
