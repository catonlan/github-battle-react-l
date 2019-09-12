// redux的action,操作popular信息
import api from '../../api';
import { Toast, } from 'antd-mobile';

const CHANGE_LANGUAGE = 'popular/LANGUAGE';

// 获取语言的仓库列表
const changeLanguage = function (lang = '') {
  return (dispatch) => {
    api.getPopularRepos(lang).then((res) => {
      dispatch({
        type: CHANGE_LANGUAGE,
        data: res.items,
      }).catch((err) => {
        Toast.fail(err, 2);
      });
    });
  };
};

export {
  CHANGE_LANGUAGE,
  changeLanguage,
};
