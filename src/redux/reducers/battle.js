// redux的reducer,操作battle信息
import {CHANGE_PLAYERA, CHANGE_PLAYERB, } from '../actions/battle';
import myFun from '../../assets/js/myFun';
import { merge, } from 'rxjs';

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
  let avatar = 'http://www.gravatar.com/avatar';

  if (myFun.isObject(action) && typeof (action.data) !== 'undefined') {
    if (action.data.username === '') {
      avatar = '';
    } else if (typeof (action.data.info.avatar_url) !== 'undefined') {
      avatar = action.data.info.avatar_url;
    }
  }

  console.log('battle reducer:', action, avatar);

  switch (action.type) {
  case CHANGE_PLAYERA:
    return merge( {}, state, {
      player_a_name: action.payload.username,
      player_a_status: action.payload.status,
      player_a_info: action.payload.info,
      player_a_avatar: avatar,
    });
  case CHANGE_PLAYERB:
    return merge({}, state, {
      player_b_name: action.payload.username,
      player_b_status: action.payload.status,
      player_b_info: action.payload.info,
      player_b_avatar: avatar,
    });
  default:

    if (action.entities && action.entities.comments) {
      return merge({}, state, action.entities.comments.byId);
    }
    return state;
  }
}
