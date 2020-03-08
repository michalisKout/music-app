import React from 'react';
import { Link } from 'react-router-dom';
import { CoverImage } from './commonComponents/CoverImage';
import { Title } from './commonComponents/Title';

const Album = ({ album }) => {
  const { title, id, coverUrl } = album;

  return (
    <li>
      <Link to={{ pathname: `/albums/${id}`, state: { albumId: id } }}>
        <CoverImage coverUrl={coverUrl} />
        <Title text={title} />
      </Link>
    </li>
  );
};

export default Album;
