import { connect } from 'react-redux';
import Track from '../components/Tack';

const mapStateToProps = (state, ownProps) => {
  const { trackId } = ownProps;
  const track = state.tracks.entities[trackId];
  return {
    track
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
