// redux的reducer,操作battle信息
import {CHANGE_PLAYERA, CHANGE_PLAYERB, } from '../actions/battle';

// 初始化状态
const initState = {
  // 选手A的用户名和信息
  player_a_name: '',
  player_a_info: {},

  // 选手B的用户名和信息
  player_b_name: '',
  player_b_info: {},
};

// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state
export default function reducer(state = initState, action) {
  switch (action.type) {
  case CHANGE_PLAYERA:
    return {
      email: action.payload,
      avatar: avatar,
    };
  default:
    return state;
  }
}
