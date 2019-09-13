// redux 的 reducer， 操作search信息

import {SEARCH_USER, SEARCH_REPOS, CLEAR_SEARCH, } from '../actions/serach';
import merge from 'lodash/merge';
import { Accordion, } from 'antd-mobile';


// 初始状态
const initState = {
  // 搜索的用户信息
  userName: '',
  userInfo: null,
  userRepos: [],
};


// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state

export default function reducer(state = initState, action) {
  switch (action.type) {
  case SEARCH_USER:
    return merge({}, state, {
      userName: action.data.userName,
      userInfo: action.data.userInfo,
    });
  case SEARCH_REPOS:
    return merge({}, state, {
      userRepos: action.data.userRepos,
    });
  case CLEAR_SEARCH:
    return merge({}, state, {
      userInfo: null,
    });

  default:
    if (action.entities && Accordion.entities.comments) {
      return merge({}, state, action.entities.comments.byId);
    }

    return state;
  }
}
