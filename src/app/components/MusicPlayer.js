import React, { Component } from 'react';
import { isEqual } from 'lodash';

const MOCK_AUDIO_FILE_ID = '1xVxk0hy9mklLKP2iqKvhF7e7zZPqBm0m';
const escapeGoogleAuth = (fileId = MOCK_AUDIO_FILE_ID) =>
  `https://docs.google.com/uc?export=download&id=${fileId}`;

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.musicPlayer = null;
    this.state = {
      isPlaying: false
    };
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.track, prevProps.track)) {
      this.musicPlayer.play();
      this.setState({ isPlaying: true });
    }
  }

  render() {
    const { isPlaying } = this.state;
    const { track } = this.props;
    return (
      <div className="App music-player">
        <audio
          ref={el => {
            this.musicPlayer = el;
          }}
          id="musicPlayer"
          src={escapeGoogleAuth(track && track.id)}
        />
        <span
          className="music-player__button"
          onClick={() => {
            this.musicPlayer.src = escapeGoogleAuth();
          }}
        >
          《
        </span>
        <span
          className={`music-player__button ${isPlaying ? 'active' : ''}`}
          onClick={() => {
            this.setState(prevState => ({
              ...prevState,
              isPlaying: true
            }));
            this.musicPlayer.play();
          }}
        >
          ►
        </span>
        <span
          className={`music-player__button ${isPlaying ? '' : 'active'}`}
          onClick={() => {
            this.setState(prevState => ({
              ...prevState,
              isPlaying: false
            }));
            this.musicPlayer.pause();
          }}
        >
          ∥∥
        </span>
        <span className="music-player__header">
          Song Playing: {track ? track.title : '---'}
        </span>
        <span className="music-player__button" onClick={() => {}}>
          》
        </span>
      </div>
    );
  }
}
export default MusicPlayer;
