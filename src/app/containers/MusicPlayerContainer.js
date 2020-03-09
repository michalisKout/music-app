import { connect } from 'react-redux';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import { playTrack } from '../actions/index';

//we should add a class container to handle api side effects

const mapStateToProps = (state = {}) => {
  const trackIds = state.tracks.ids;
  const trackId = state.playerConfig.trackId;
  const track = state.tracks.entities[trackId];
  return {
    trackIds,
    track
  };
};

export default connect(mapStateToProps, { playTrack })(MusicPlayer);
