import React, { Component } from 'react';
import { isEqual, debounce } from 'lodash';

const escapeGoogleAuth = (fileId = '') =>
  fileId && `https://docs.google.com/uc?export=download&id=${fileId}`;

const UPDATE_TIME_EVENT = 'timeupdate';
const WAIT_TIME = 500;
const debouchConfig = { maxWait: 1500 };
class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.musicPlayer = null;
    this.progressBar = null;
    this.handleAudioPause = this.handleAudioPause.bind(this);
    this.handleAudioPlay = this.handleAudioPlay.bind(this);
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

  updateProgressBar(currentProgress) {
    if (currentProgress) {
      this.progressBar.value = currentProgress;
    }
  }
  componentDidMount() {
    const calculateProgress = () => {
      const { currentTime, duration } = this.musicPlayer;
      const timeProgress = currentTime / duration;
      this.progressBar && this.updateProgressBar(timeProgress);
    };

    this.musicPlayer &&
      this.musicPlayer.addEventListener(
        UPDATE_TIME_EVENT,
        debounce(calculateProgress, WAIT_TIME, debouchConfig)
      );
  }

  handleAudioPlay() {
    const { isPlaying } = this.state;
    const { track } = this.props;
    const audioSource = this.musicPlayer.src;
    const trackId = track && track.id;
    const shouldPlayAudio = audioSource.includes(trackId) && !isPlaying;

    if (shouldPlayAudio) {
      this.setState(prevState => ({
        ...prevState,
        isPlaying: shouldPlayAudio
      }));
      this.musicPlayer.play();
    }
  }

  handleAudioPause() {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.setState(prevState => ({
        ...prevState,
        isPlaying: !isPlaying
      }));
      this.musicPlayer.pause();
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
          onClick={this.handleAudioPlay}
        >
          ►
        </span>
        <span
          className={`music-player__button ${isPlaying ? '' : 'active'}`}
          onClick={this.handleAudioPause}
        >
          ∥∥
        </span>
        <span className="music-player__header">
          Song Playing: {track ? track.title : '---'}
        </span>
        <progress
          ref={el => {
            this.progressBar = el;
          }}
          value="0"
          max="1"
        ></progress>
        <span className="music-player__button" onClick={() => {}}>
          》
        </span>
      </div>
    );
  }
}
export default MusicPlayer;
