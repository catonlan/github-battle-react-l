// 创建store

import {createBrowserHistory, } from 'history';
import {applyMiddleware, compose, createStore, } from 'redux';
import {routerMiddleware, } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import combineReducers from './reducers';


export const history = createBrowserHistory();

// 使用Redux DevTools Extension浏览器调试插件
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // 有指定扩展选项，像name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

// preloadedState为初始状态
export default function configureStore(preloadedState) {
  const store = createStore(
    combineReducers(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        ReduxThunk
        // ... other middlewares ...
      ),
    ),
  );

  return store;
}

