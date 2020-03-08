import React from 'react';

export const Title = ({ cssClass = '', text }) => {
  return <h3 className={cssClass}>{text}</h3>;
};
