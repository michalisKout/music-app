import React from 'react';

export const CoverImage = ({ coverUrl }) => {
  return <img src={`${coverUrl}`} alt="cover-image" />;
};
