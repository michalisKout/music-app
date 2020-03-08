import React from 'react';
import { CoverImage } from './commonComponents/CoverImage';
import { Title } from './commonComponents/Title';

const Tack = ({ track }) => {
  const { title, coverUrl } = track;
  return (
    <li className="track">
      <CoverImage coverUrl={coverUrl} />
      <Title cssClass="track__title" text={title} />
    </li>
  );
};

export default Tack;
