// redux的action,操作popular信息
import api from '../../api';
import { Toast, } from 'antd-mobile';
import myFun from '../../assets/js/myFun';

const CHANGE_LANGUAGE = 'popular/LANGUAGE';

// 获取语言的仓库列表
const changeLanguage = function (lang = '', callback = null) {
  return (dispatch) => {
    api.getPopularRepos(lang).then((res) => {
      dispatch({
        type: CHANGE_LANGUAGE,
        data: {
          lang: lang,
          repos: res.items,
        },
      });
      // 执行回调函数
      if (myFun.isFunction(callback)) {
        callback();
      }
    }).catch((err) => {
      Toast.fail(err, 2);
    });
  };
};

export {
  CHANGE_LANGUAGE,
  changeLanguage,
};
