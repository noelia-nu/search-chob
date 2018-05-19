import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

/**
  * configureStore combine all the reducers of the application
  * @return {json} list of reducers
*/
export default function configureStore() {
  return createStore(
    combineReducers({
      
    }),
    applyMiddleware(thunk),
  );
}
