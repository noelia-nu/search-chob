import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import movies from '../reducers/moviesReducer';

export default function configureStore() {
  return createStore(
    combineReducers({
      movies
    }),
    applyMiddleware(thunk)
  );
}
