// redux的reducer,操作battle信息
import {CHANGE_PLAYERA, CHANGE_PLAYERB, } from '../actions/battle';

// 初始化状态
const initState = {
  // 选手A的用户名和信息,状态，头像
  player_a_name: '',
  player_a_status: false,
  player_a_info: {},
  player_a_avatar: '',

  // 选手A的用户名和信息,状态，头像
  player_b_name: '',
  player_b_status: false,
  player_b_info: {},
  player_b_avatar: '',
};

// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state
export default function reducer(state = initState, action) {
  const avatar = (action.payload.status && typeof (action.payload.info.avatar_url) !== 'undefined') ? action.payload.info.avatar_url : 'http://www.gravatar.com/avatar';

  switch (action.type) {
  case CHANGE_PLAYERA:
    return {
      player_a_name: action.payload.username,
      player_a_status: action.payload.status,
      player_a_info: action.payload.info,
      player_a_avatar: avatar,
    };
  case CHANGE_PLAYERB:
    return {
      player_b_name: action.payload.username,
      player_b_status: action.payload.status,
      player_b_info: action.payload.info,
      player_b_avatar: avatar,
    };
  default:
    return state;
  }
}
