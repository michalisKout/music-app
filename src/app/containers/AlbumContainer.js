import { connect } from 'react-redux';
import Album from '../components/Album';

const mapStateToProps = (state = {}, ownProps) => {
  const album = state.albums.entities[ownProps.albumId] || {
    title: '',
    cover_url: ''
  };
  return {
    album
  };
};

export default connect(mapStateToProps)(Album);
