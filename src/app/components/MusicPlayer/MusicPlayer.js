import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual, debounce, throttle } from 'lodash';
import PlayerButton from './PlayerButton';
import SongTitle from './SongTitle';
import {
  escapeGoogleAuthUrl,
  shouldActivate,
  getMusicPlayerAlertMessage
} from '../../utils/helpers';
import {
  DEBOUNCE_TIME,
  THROTTLE_TIME,
  debouchConfig,
  UPDATE_TIME_EVENT
} from '../../utils/config';
import fp from 'lodash/fp';

const PLAYER_BTN_CSS_CLASS = 'music-player__button';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.musicPlayer = null;
    this.progressBar = null;

    this.handleAudio = this.handleAudio.bind(this);
    this.calculateProgress = this.calculateProgress.bind(this);
    this.changeTrack = this.changeTrack.bind(this);
    this.getPrevTrack = this.getPrevTrack.bind(this);
    this.getNextTrack = this.getNextTrack.bind(this);
    this.getTrackPositionData = this.getTrackPositionData.bind(this);

    this.state = {
      isPlaying: false,
      loading: false
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

  componentWillUnmount() {
    this.musicPlayer &&
      this.musicPlayer.removeEventListener(
        UPDATE_TIME_EVENT,
        debounce(this.calculateProgress, DEBOUNCE_TIME, debouchConfig)
      );
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
    const { track } = this.props;
    const playPromise = this.musicPlayer.play();

    if (playPromise !== undefined) {
      this.setState(prevState => ({ ...prevState, loading: true }));

      playPromise
        .then(_ => {
          this.setState(prevState => ({
            ...prevState,
            loading: false,
            isPlaying
          }));
          !isPlaying && this.musicPlayer.pause();
        })
        .catch(_ => {
          alert(getMusicPlayerAlertMessage(this.musicPlayer, track));
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

  getPrevTrack(positionData) {
    const { current, trackIds } = positionData;
    const previousPos = current === 0 ? trackIds.length - 1 : current - 1;

    return { ...positionData, current: previousPos };
  }

  getNextTrack(positionData) {
    const { current, trackIds } = positionData;

    const nextPos = current === trackIds.length - 1 ? 0 : current + 1;

    return { ...positionData, current: nextPos };
  }

  changeTrack(positionData) {
    const { track, playTrack, trackIds } = this.props;

    if (track) {
      const currentPosition = positionData.current;
      const tackIdToPlay = trackIds[currentPosition];

      tackIdToPlay && playTrack(tackIdToPlay);
    }

    return positionData;
  }

  getTrackPositionData(positionData) {
    const { track, trackIds } = this.props;
    const current = track && trackIds.indexOf(track.id);

    return { ...positionData, current, trackIds };
  }

  render() {
    const { isPlaying, loading } = this.state;
    const { track, trackIds } = this.props;

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
          handler={() => {
            fp.flow([
              this.getTrackPositionData,
              this.getPrevTrack,
              this.changeTrack
            ])({});
          }}
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
        <SongTitle
          track={track}
          cssClass={'music-player__song-title'}
          loading={loading}
        />
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
          handler={() => {
            fp.flow([
              this.getTrackPositionData,
              this.getNextTrack,
              this.changeTrack
            ])({});
          }}
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
