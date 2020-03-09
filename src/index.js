import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MusicApp from './app/components/MusicApp';
import rootReducer from './app/reducers/index';

import './app/styles/sass/index.scss';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <MusicApp />
  </Provider>,
  document.getElementById('root')
);
