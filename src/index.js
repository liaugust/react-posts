import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux'

import {rootReducer} from './redux/reducers/rootReducer'
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
