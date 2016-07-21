import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';

import routes from './ui/routes';
import store from './store';

import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import { createHistory, useBasename } from 'history';

const history = syncHistoryWithStore(useBasename(createHistory)({
  basename: document.querySelector('base').getAttribute('href')
}), store);

import App from './ui/App';
import connect from './connect';

render(<Provider store={store}>
  {routes(history, connect(App), store)}
  </Provider>, document.getElementById('app'));