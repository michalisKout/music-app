import React from 'react';
import { CoverImage } from './commonComponents/CoverImage';
import { Title } from './commonComponents/Title';
import TracksContainer from '../containers/TracksContainer';

const Album = ({ album }) => {
  const { title, id, coverUrl, tracks } = album;
  const trackIds = tracks;
  const trackList = trackIds.map(trackId => (
    <TracksContainer key={trackId} trackId={trackId} />
  ));

  return (
    <div className="album" key={id}>
      <div className="album__info">
        <Title text={`Album Title: ${title}`} />
        <CoverImage coverUrl={coverUrl} />
      </div>
      <ul className="track-list">{trackList}</ul>
    </div>
  );
};

export default Album;
