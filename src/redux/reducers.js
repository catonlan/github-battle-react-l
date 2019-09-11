
// 吧多个 reducer 函数合并成一个 reducer 函数
import {combineReducers, } from 'redux';
import {connectRouter,} from 'connected-react-router';
import slidebar from './reducers/slidebar';
import footer from './reducers/footer';


export default (history) => combineReducers({
  router: connectRouter(history),
  slidebar,
  footer,
});
