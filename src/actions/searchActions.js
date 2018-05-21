import * as types from './actionTypes';
import searchApi from '../api/searchApi';

export function loadMovies() {
  return function(dispatch) {
    return searchApi.getAllMovies().then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadMoviesSuccess(movies) {
  return {type: types.LOAD_MOVIES_SUCCESS, movies};
}
