import { connect } from 'react-redux';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

const mapStateToProps = (state = {}) => {
  const trackId = state.playerConfig.trackId;
  const track = state.tracks.entities[trackId];
  return {
    track
  };
};

export default connect(mapStateToProps)(MusicPlayer);
