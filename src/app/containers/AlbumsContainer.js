import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Albums from '../components/Albums';
import { DATA_TYPES } from '../utils/config';
import { updateAlbums } from '../actions';
import { getAPINormalizedData, album } from '../service/dataMapperApi';
import { albumsSelector, albumsIdsSelector } from '../selectors';
import { isEqual } from 'lodash';

class AlbumsContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    getAPINormalizedData(DATA_TYPES.ALBUMS, album).then(data => {
      const shouldUpdateAlbums = !isEqual(data, this.props.albums);
      if (shouldUpdateAlbums) {
        this.props.updateAlbums(data);
      }
    });
  }

  render() {
    return <Albums {...this.props} />;
  }
}

const mapStateToProps = (state = {}) => {
  const albums = albumsSelector(state);
  const albumIds = albumsIdsSelector(state);
  return {
    albums,
    albumIds
  };
};

export default connect(mapStateToProps, { updateAlbums })(AlbumsContainer);
