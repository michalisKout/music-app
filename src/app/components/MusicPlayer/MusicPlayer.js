import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual, debounce, throttle } from 'lodash';
import PlayerButton from './PlayerButton';
import SongTitle from './SongTitle';

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
    const shouldActivate = isActive => (isActive ? 'active' : '');

    return (
      <div className="App music-player">
        <audio
          ref={el => {
            this.musicPlayer = el;
          }}
          id="musicPlayer"
          src={escapeGoogleAuth(track && track.id)}
        />
        <PlayerButton content={'《'} cssClass={'music-player__button'} />
        <PlayerButton
          content={'►'}
          cssClass={`music-player__button ${shouldActivate(isPlaying)}`}
          handler={throttle(this.handleAudioPlay, 100)}
        />
        <PlayerButton
          content={'∥∥'}
          cssClass={`music-player__button ${shouldActivate(!isPlaying)}`}
          handler={throttle(this.handleAudioPause, 100)}
        />
        <SongTitle track={track} cssClass={'music-player__song-title'} />
        <progress
          ref={el => {
            this.progressBar = el;
          }}
          value="0"
          max="1"
        ></progress>
        <PlayerButton content={'》'} cssClass={'music-player__button'} />
      </div>
    );
  }
}

MusicPlayer.propType = {
  track: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    coverUrl: PropTypes.string
  })
};

export default React.memo(MusicPlayer);
