import React from 'react';
import { CoverImage } from './commonComponents/CoverImage';
import { Title } from './commonComponents/Title';

const Track = ({ track, playTrack }) => {
  const { id, title, coverUrl } = track;
  return (
    <li
      className="track"
      onClick={() => {
        playTrack(id);
      }}
    >
      <CoverImage coverUrl={coverUrl} />
      <Title cssClass="track__title" text={title} />
    </li>
  );
};

export default Track;
