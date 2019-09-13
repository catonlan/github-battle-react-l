
// 吧多个 reducer 函数合并成一个 reducer 函数
import {combineReducers, } from 'redux';
import {connectRouter, } from 'connected-react-router';
import slidebar from './reducers/slidebar';
import footer from './reducers/footer';
import user from './reducers/user';
import battle from './reducers/battle';
import popular from './reducers/popular';
import search from './reducers/search';

export default (history) => combineReducers({
  router: connectRouter(history),
  slidebar,
  footer,
  user,
  battle,
  popular,
  search,
});
