import React, { Component } from 'react';

const MOCK_AUDIO_FILE_ID = '1xVxk0hy9mklLKP2iqKvhF7e7zZPqBm0m';
const escapeGoogleAuth = (fileId = MOCK_AUDIO_FILE_ID) =>
  `https://docs.google.com/uc?export=download&id=${fileId}`;

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.musicPlayer = null;
    this.state = {
      isPlaying: false,
      isPaused: false
    };
  }

  componentDidMount() {
    if (this.musicPlayer) {
      // this.musicPlayer.play();
    }
  }

  render() {
    const { isPaused, isPlaying } = this.state;
    return (
      <div className="App music-player">
        <header className="App-header">
          <audio
            ref={el => {
              this.musicPlayer = el;
            }}
            id="musicPlayer"
            src={escapeGoogleAuth()}
          />
        </header>
        <span
          className={`music-player__button ${isPlaying ? 'active' : ''}`}
          onClick={() => {
            this.setState(prevState => ({
              ...prevState,
              isPaused: false,
              isPlaying: true
            }));
            this.musicPlayer.play();
          }}
        >
          Play
        </span>
        <span
          className={`music-player__button ${isPaused ? 'active' : ''}`}
          onClick={() => {
            this.setState(prevState => ({
              ...prevState,
              isPaused: true,
              isPlaying: false
            }));
            this.musicPlayer.pause();
          }}
        >
          Pause
        </span>
        <span
          className="music-player__button"
          onClick={() => {
            this.musicPlayer.src = escapeGoogleAuth();
          }}
        >
          Next
        </span>
        <span className="music-player__button" onClick={() => {}}>
          Previous
        </span>
      </div>
    );
  }
}

export default MusicPlayer;
