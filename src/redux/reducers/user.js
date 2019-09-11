// redux的reducer,操作用户信息

import {CHANGE_EMAIL, } from '../actions/user';

// 初始化状态
const initState = {
  email: '',
};

// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state
export default function reducer(state = initState, action) {
  switch (action.type) {
  case CHANGE_EMAIL:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
}
