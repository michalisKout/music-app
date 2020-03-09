import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual, debounce, throttle } from 'lodash';
import PlayerButton from './PlayerButton';
import SongTitle from './SongTitle';
import { escapeGoogleAuthUrl, shouldActivate } from '../../utils/helpers';

const UPDATE_TIME_EVENT = 'timeupdate';
const DEBOUNCE_TIME = 500;
const THROTTLE_TIME = 100;
const debouchConfig = { maxWait: 1500 };
const ALERT_MSG = 'Music Player is still loading the track...';
const PLAYER_BTN_CSS_CLASS = 'music-player__button';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.musicPlayer = null;
    this.progressBar = null;

    this.handleAudio = this.handleAudio.bind(this);
    this.calculateProgress = this.calculateProgress.bind(this);
    this.getPrevTrack = this.getPrevTrack.bind(this);
    this.getNextTrackPos = this.getNextTrackPos.bind(this);

    this.state = {
      isPlaying: false
    };
  }

  componentDidMount() {
    this.musicPlayer &&
      this.musicPlayer.addEventListener(
        UPDATE_TIME_EVENT,
        debounce(this.calculateProgress, DEBOUNCE_TIME, debouchConfig)
      );
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.track, prevProps.track)) {
      this.interactWithAudioSafely(true);
    }
  }

  updateProgressBar(currentProgress) {
    if (currentProgress) {
      this.progressBar.value = currentProgress;
    }
  }

  calculateProgress() {
    const { currentTime, duration } = this.musicPlayer;
    const timeProgress = currentTime / duration;
    this.progressBar && this.updateProgressBar(timeProgress);
  }

  interactWithAudioSafely(isPlaying = false) {
    const playPromise = this.musicPlayer.play();

    if (playPromise !== undefined) {
      playPromise
        .then(_ => {
          this.setState({ isPlaying });
          if (!isPlaying) {
            this.musicPlayer.pause();
          }
        })
        .catch(_ => {
          alert(ALERT_MSG);
        });
    }
  }

  handleAudio() {
    const { isPlaying } = this.state;
    const { track } = this.props;
    const audioSource = this.musicPlayer.src;
    const trackId = track && track.id;
    const shouldPlayAudio = audioSource.includes(trackId) && !isPlaying;

    this.interactWithAudioSafely(shouldPlayAudio);
  }

  getPrevTrack() {
    const { track, trackIds } = this.props;
    const currentTrackPosition = trackIds.indexOf(track.id);
    if (currentTrackPosition === 0) {
      return trackIds.length - 1;
    } else {
      return currentTrackPosition - 1;
    }
  }

  getNextTrackPos() {
    const { track, trackIds } = this.props;
    const currentTrackPosition = trackIds.indexOf(track.id);

    if (currentTrackPosition - 1 === trackIds.length) {
      return 0;
    } else {
      return currentTrackPosition + 1;
    }
  }

  handleTrack(positionHandler) {
    const { track, playTrack, trackIds } = this.props;
    if (track) {
      const pos = positionHandler();
      const tackIdToPlay = trackIds[pos];

      tackIdToPlay && playTrack(tackIdToPlay);
    }
  }

  render() {
    const { isPlaying } = this.state;
    const { track } = this.props;

    return (
      <div className="music-player">
        <audio
          ref={el => {
            this.musicPlayer = el;
          }}
          id="musicPlayer"
          src={escapeGoogleAuthUrl(track && track.id)}
        />
        <PlayerButton
          content={'《'}
          cssClass={PLAYER_BTN_CSS_CLASS}
          handler={() => this.handleTrack(this.getPrevTrack)}
        />
        <PlayerButton
          content={'►'}
          cssClass={`${PLAYER_BTN_CSS_CLASS} ${shouldActivate(isPlaying)}`}
          handler={throttle(this.handleAudio, THROTTLE_TIME)}
        />
        <PlayerButton
          content={'∥∥'}
          cssClass={`${PLAYER_BTN_CSS_CLASS} ${shouldActivate(!isPlaying)}`}
          handler={throttle(this.handleAudio, THROTTLE_TIME)}
        />
        <SongTitle track={track} cssClass={'music-player__song-title'} />
        <progress
          ref={el => {
            this.progressBar = el;
          }}
          value="0"
          max="1"
        ></progress>
        <PlayerButton
          content={'》'}
          cssClass={PLAYER_BTN_CSS_CLASS}
          handler={() => this.handleTrack(this.getNextTrackPos)}
        />
      </div>
    );
  }
}

MusicPlayer.propType = {
  track: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    coverUrl: PropTypes.string
  }),
  playTrack: PropTypes.func.isRequired
};

export default React.memo(MusicPlayer);
