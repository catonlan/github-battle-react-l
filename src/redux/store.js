// 创建store

import {createBrowserHistory,} from 'history';
import {applyMiddleware, compose, createStore,} from 'redux';
import {routerMiddleware,} from 'connected-react-router';
import combineReducers from './reducers';


export const history = createBrowserHistory();

// preloadedState为初始状态
export default function configureStore(preloadedState) {
  const store = createStore(
    combineReducers(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  );

  return store;
}

