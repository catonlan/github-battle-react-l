// redux的reducer,操作popular信息
import {CHANGE_LANGUAGE, } from '../actions/popular';
import merge from 'lodash/merge';

// 初始化状态
const initState = {
  // 仓库列表
  repositories: [],
};

// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state
export default function reducer(state = initState, action) {
  switch (action.type) {
  case CHANGE_LANGUAGE:
    return merge({}, state, {
      repositories: action.data,
    });
  default:
    if (action.entities && action.entities.comments) {
      return merge({}, state, action.entities.comments.byId);
    }
    return state;
  }
}
