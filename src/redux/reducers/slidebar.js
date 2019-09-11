// redux 的 reducer

import {TOGGLE_SIDBAR,} from '../actions/slidebar';

// 初始化状态
const initState = {
  sliderOpen: false,
};

// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state
export default function reducer(state = initState, action) {
  console.log('reducer type', action.type);
  switch (action.type) {
  case TOGGLE_SIDBAR:
    return {
      sliderOpen: !state.sliderOpen,
    };
  default:
    return state;
  }
}
