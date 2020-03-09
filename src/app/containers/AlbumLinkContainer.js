import { connect } from 'react-redux';
import { DEFAULT_ALBUM } from '../utils/config';
import AlbumLink from '../components/AlbumLink';

//we should add a class container to handle api side effects

const mapStateToProps = (state = {}, ownProps) => {
  const album = state.albums.entities[ownProps.albumId] || DEFAULT_ALBUM;
  return {
    album
  };
};

export default connect(mapStateToProps)(AlbumLink);
