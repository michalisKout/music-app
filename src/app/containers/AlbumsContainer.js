import { connect } from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = (state = {}) => {
  const albumIds = state.albums.ids || [];
  return {
    albumIds
  };
};

export default connect(mapStateToProps)(Albums);
