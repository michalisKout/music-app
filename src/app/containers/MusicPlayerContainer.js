import { connect } from 'react-redux';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

//we should add a class container to handle api side effects

const mapStateToProps = (state = {}) => {
  const trackId = state.playerConfig.trackId;
  const track = state.tracks.entities[trackId];
  return {
    track
  };
};

export default connect(mapStateToProps)(MusicPlayer);
