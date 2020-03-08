import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AlbumsContainer from '../containers/AlbumsContainer';
import AlbumContainer from '../containers/AlbumContainer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AlbumsContainer} />
      <Route path="/albums/:id" component={AlbumContainer} />
    </Switch>
  );
};

export default Routes;
