import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Provider from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';
import rootSaga from 'sagas';
import configureStore from 'store/configureStore';

const store = configureStore();
store.runSaga(rootSaga);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes()}
    </Router>
  </Provider>
);

render(<App />, document.getElementById('root'));
