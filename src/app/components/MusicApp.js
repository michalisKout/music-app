import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

const MusicApp = () => {
  return (
    <div className="music-app__container">
      <div>Music App</div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default MusicApp;
