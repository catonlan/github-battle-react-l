// redux的reducer,操作用户信息

import {CHANGE_EMAIL, } from '../actions/user';
import myFun from '../../assets/js/myFun';

// 初始化状态
const initState = {
  email: '',
  avatar: '',
};

// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state
export default function reducer(state = initState, action) {
  const avatar = myFun.getAvatarByEmail(action.payload);

  switch (action.type) {
  case CHANGE_EMAIL:
    return {
      email: action.payload,
      avatar: avatar,
    };
  default:
    return state;
  }
}
