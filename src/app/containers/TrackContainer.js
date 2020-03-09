import { connect } from 'react-redux';
import { playTrack } from '../actions/index';
import Track from '../components/Track';

const mapStateToProps = (state, ownProps) => {
  const { trackId } = ownProps;
  const track = state.tracks.entities[trackId];
  return {
    track
  };
};

const mapDispatchToProps = { playTrack };

export default connect(mapStateToProps, mapDispatchToProps)(Track);
