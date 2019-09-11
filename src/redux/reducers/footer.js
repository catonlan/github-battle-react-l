// redux的reducer,操作底部栏
import {SWITCH_FOOTTAB, TOGGLE_FOOTTAB, } from '../actions/footer';

// 初始化状态
const initState = {
  footerActive: 'home',
  footerHidden: false,
};

// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state
export default function reducer(state = initState, action) {
  console.log('最后执行计划函数, 2222', action.type);
  switch (action.type) {
  case SWITCH_FOOTTAB:
    return {
      footerActive: action.payload,
    };
  case TOGGLE_FOOTTAB:
    return {
      footerHidden: !state.footerHidden,
    };
  default:
    return state;
  }
}
