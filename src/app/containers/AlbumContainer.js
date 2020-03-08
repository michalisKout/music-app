import { connect } from 'react-redux';
import { DEFAULT_ALBUM } from '../utils/config';
import Album from '../components/Album';

const mapStateToProps = (state, ownProps) => {
  const {
    location: {
      state: { albumId }
    }
  } = ownProps;

  const album = state.albums.entities[albumId] || DEFAULT_ALBUM;
  return {
    album
  };
};

export default connect(mapStateToProps)(Album);
