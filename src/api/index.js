import xhr from '../utils/xhr';
// 具体API接口

// 根据用户名获取github用户信息
const getUserByName = function (username) {
  // 这里使用字符串模板变量
  const uri = `http://api.github.com/users/${username}`;

  return xhr({
    url: uri,
    method: 'get',
  });
};


export default {
  getUserByName,
};
