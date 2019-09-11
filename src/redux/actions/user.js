// redux的action,操作用户信息

const CHANGE_EMAIL = 'user/CHANGE_EMAIL';

const changeEmail = function (email = '') {
  return {
    type: CHANGE_EMAIL,
    payload: email, // 用户邮箱
  };
};

export {
  CHANGE_EMAIL,
  changeEmail,
};
