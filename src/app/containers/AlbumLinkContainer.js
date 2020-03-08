import { connect } from 'react-redux';
import { DEFAULT_ALBUM } from '../utils/config';
import AlbumLink from '../components/AlbumLink';

const mapStateToProps = (state = {}, ownProps) => {
  const album = state.albums.entities[ownProps.albumId] || DEFAULT_ALBUM;
  return {
    album
  };
};

export default connect(mapStateToProps)(AlbumLink);
