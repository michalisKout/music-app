import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CoverImage } from './commonComponents/CoverImage';
import { Title } from './commonComponents/Title';

const AlbumLink = ({ album }) => {
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

AlbumLink.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.string)
  })
};

export default React.memo(AlbumLink);
