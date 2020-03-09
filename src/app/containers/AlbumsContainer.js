import { connect } from 'react-redux';
import Albums from '../components/Albums';

//we should add a class container to handle api side effects

const mapStateToProps = (state = {}) => {
  const albumIds = state.albums.ids || [];
  return {
    albumIds
  };
};

export default connect(mapStateToProps)(Albums);
