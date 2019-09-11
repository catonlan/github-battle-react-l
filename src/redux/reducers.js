
// 吧多个 reducer 函数合并成一个 reducer 函数
import {combineReducers,} from 'redux';
import slidebar from './reducers/slidebar';


export default combineReducers({
  slidebar,
});
