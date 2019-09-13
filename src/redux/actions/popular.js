// redux的action,操作popular信息
import api from '../../api';
import { Toast, } from 'antd-mobile';
import myFun from '../../assets/js/myFun';

const CHANGE_LANGUAGE = 'popular/CHANGE_LANGUAGE';
const CLEAR_REPOSITORY = 'popular/CLEAR_REPOSITORY';


// 获取语言的仓库列表
const changeLanguage = function (lang = '', callback = null) {
  return (dispatch) => {
    if (lang === '') {
      lang = 'All';
    }
    api.getPopularRepos(lang).then((res) => {
      // 执行回调函数
      // if (myFun.isFunction(callback)) {
      //   callback();
      // }
      dispatch({
        type: CHANGE_LANGUAGE,
        data: {
          lang: lang,
          repos: res.items,
        },
      });
      if (myFun.isFunction(callback)) {
        callback();
      }
    }).catch((err) => {
      Toast.fail(err, 2);
    });
  };
};


// 清空仓库列表
const clearRepository = function () {
  return (dispatch) => {
    dispatch({
      type: CLEAR_REPOSITORY,
    });
  };
};


export {
  CHANGE_LANGUAGE,
  CLEAR_REPOSITORY,
  changeLanguage,
  clearRepository,
};
