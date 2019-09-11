// redux的action,操作底部栏
const SWITCH_FOOTTAB = 'footer/SWITCH';
const TOGGLE_FOOTTAB = 'footer/TOGGLE';

// 选中底部tab
const switchFooterTab = function (tabName = '') {
  console.log('switchFooterTab 调起action动作, 1111', tabName);
  return {
    type: SWITCH_FOOTTAB,
    payload: tabName, // 底部tab名称
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
