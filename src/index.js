import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadMovies } from './actions/searchActions';

const store = configureStore();
store.dispatch(loadMovies());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
