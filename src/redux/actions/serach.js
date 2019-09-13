// redux的 action,操作search信息

import api from '../../api';
import {Toast, } from 'antd-mobile';
import myFun from '../../assets/js/myFun'
;


const SEARCH_USER = 'popular/SEARCH_USER';
const SEARCH_REPOS = 'popular/SEARCH_REPOS';
const CLEAR_SEARCH = 'popular/CLEAR_SEARCH';

// 搜索用户

const searchUser = function (username, callback = null) {
  return (dispatch) => {
    api.getProfileByName(username).then((res) => {
      dispatch({
        type: SEARCH_USER,
        data: {
          userName: username,
          userInfo: res,
        },
      });
      // 执行回调函数
      if (myFun.isFunction(callback)) {
        callback();
      }
    }).catch(() => {
      Toast.fail('用户不存在', 2);
    });
  };
};


// 搜索用户的仓库

const searchRepos = function (username, callback = null) {
  return (dispatch) => {
    api.getUserRepos(username).then((res) => {
      dispatch({
        type: SEARCH_REPOS,
        data: {
          userRepos: res,
        },
      });

      // 执行回调函数

      if (myFun.isFunction(callback)) {
        callback();
      }
    });
  };
};


// 清空搜索数据

const clearSearch = function () {
  return (dispatch) => {
    dispatch({
      type: CLEAR_SEARCH,
    });
  };
};

export {
  SEARCH_USER,
  SEARCH_REPOS,
  CLEAR_SEARCH,
  searchUser,
  searchRepos,
  clearSearch,
};
