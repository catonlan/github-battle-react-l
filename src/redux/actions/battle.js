// redux的action,操作battle信息
// import { push, } from 'connected-react-router';
import api from '../../api';
import {Toast, } from 'antd-mobile';
import { push, } from 'connected-react-router';
import myFun from '../../assets/js/myFun';

const CHANGE_PLAYERA = 'battle/PLAYERA';
const CHANGE_PLAYERB = 'battle/PLAYERB';
const COMPARE_CLEAR = 'battle/COMPARE_CLEAR';
const COMPARE_RESULT = 'battle/COMPARE_RESULT';

// 改变选手,切换用户信息
const changePlayer = function (userName = '', type = '') {
  const data = {
    username: userName,
    info: {},
    status: false,
  };

  return (dispatch) => {
    api.getUserByName(userName).then((res) => {
      data.info = res;
      data.status = true;
      dispatch({
        type: type,
        data: data,
      });
    }).catch(() => {
      dispatch({
        type: type,
        data: data,
      });
    });
  };
};

// 改变选手A的名称
const changePlayerA = function (userName = '') {
  return changePlayer(userName, CHANGE_PLAYERA);
};

// 改变选手B的名称
const changePlayerB = function (userName = '') {
  return changePlayer(userName, CHANGE_PLAYERB);
};

// 清空对比结果
const compareClear = function () {
  return (dispatch) => {
    dispatch({
      type: COMPARE_CLEAR,
    });
  };
};

// 获取对比结果
const compareResult = function (userNames = [], callback = null) {
  return (dispatch) => {
    api.battleCompare(userNames).then((players) => {
      dispatch({
        type: COMPARE_RESULT,
        result: true,
        players: players,
      });
      // 执行回调函数
      if (myFun.isFunction(callback)) {
        callback();
      }
    }).catch((err) => {
      Toast.fail(err, 1);
      dispatch({
        type: COMPARE_RESULT,
        result: false,
        players: [],
      });
      dispatch(push('/battle'));
    });
  };
};


export {
  CHANGE_PLAYERA,
  CHANGE_PLAYERB,
  COMPARE_CLEAR,
  COMPARE_RESULT,
  changePlayerA,
  changePlayerB,
  compareClear,
  compareResult,

};
