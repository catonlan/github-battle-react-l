// redux的action,操作battle信息
import { push, } from 'connected-react-router';
import {getUserByName, } from '../../api';

const CHANGE_PLAYERA = 'battle/PLAYERA';
const CHANGE_PLAYERB = 'battle/PLAYERB';

const changePlayer = function (userName = '', type = '') {
  const data = {
    username: userName,
    info: {},
    status: false,
  };

  return (dispatch) => {
    getUserByName(userName).then((res) => {
      data.info = res;
      data.status = true;
      dispatch({
        type: type,
        payload: data,
      });
    }).catch(() => {
      dispatch({
        type: type,
        payload: data,
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

export {
  CHANGE_PLAYERA,
  CHANGE_PLAYERB,
  changePlayerA,
  changePlayerB,
};
