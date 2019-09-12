import {push, } from 'connected-react-router';

// redux的action,操作底部栏
const SWITCH_FOOTTAB = 'footer/SWITCH';
const TOGGLE_FOOTTAB = 'footer/TOGGLE';

// 选中底部tab (同步)
const switchFooterTabSync = function (tabName = '') {
  console.log('switchFooterTab 调起action动作, 1111', tabName);
  return {
    type: SWITCH_FOOTTAB,
    payload: tabName, // 底部tab名称
  };
};

const switchFooterTab = function (tabName = '') {
  // 使用redux Thunk后，内部函数可接收2方法，dispatch 和 getState参数
  return (dispatch, getState) => {
    if (process.env.NODE_ENV == 'development') {
      const state = getState();

      console.log('switchFooterTab:', process.env, state);
    }


    // 异步处理
    setTimeout( () => {
      dispatch(switchFooterTabSync(tabName));
    }, 150);

    // 路由跳转
    const url = '/' + tabName;

    console.log('url', url);
    dispatch(push(url));
  };
};

// 切换底部栏
const toggleFooter = function () {
  return {
    type: TOGGLE_FOOTTAB,
  };
};

export {
  SWITCH_FOOTTAB,
  TOGGLE_FOOTTAB,
  switchFooterTab,
  toggleFooter,
};
