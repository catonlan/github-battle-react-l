// redux 的 reducer， 操作search信息

import {SEARCH_USER, SEARCH_REPOS, CLEAR_SEARCH, } from '../actions/serach';
import merge from 'lodash/merge';
import { Accordion, } from 'antd-mobile';


// 初始状态
const initState = {
  // 搜索的用户信息
  userName: '',
  userInfo: null,
  userRepos: null,
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
    // 如下的处理有问题:若state.userRepos=[1,2,3],而action.data.userRepos=[],合并后state.userRepos还是=[1,2,3],没有更新替换的目的
    // return merge({}, state, {
    //   userRepos: action.data.userRepos,
    // });

    // 所以,数组整个更新须如下处理
    state.userRepos = action.data.userRepos;
    return merge({}, state);

  case CLEAR_SEARCH:
    return merge({}, state, {
      userInfo: null,
      userRepos: null,
    });

  default:
    if (action.entities && Accordion.entities.comments) {
      return merge({}, state, action.entities.comments.byId);
    }

    return state;
  }
}
