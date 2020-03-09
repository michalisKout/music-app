import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import MusicPlayerContainer from '../containers/MusicPlayerContainer';

const MusicApp = () => {
  return (
    <div className="music-app__container">
      <h1 className="music-app">Music App</h1>
      <Router>
        <Routes />
      </Router>
      <MusicPlayerContainer />
    </div>
  );
};

export default MusicApp;
