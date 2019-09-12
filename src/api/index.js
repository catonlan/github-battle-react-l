// 具体API接口
import xhr from '../utils/xhr';
import axios from '../utils/axios';

// --------------------------------下面是相关统计函数

/**
 * 累计仓库列表的星数
 * @param {array} repos
 */

const getStarCount = function (repos = []) {
  // reduce() 方法对数组中的每个元素执行一个由你提供的reducer函数(升序执行)，将其结果汇总为单个返回值
  return repos.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0); // 0为初始值
};

/**
 * 计算用户得分
 * @param {object} profile 用户信息
 * @param {array} repos 仓库列表
 */

const calculateScore = function (profile, repos) {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);

  return followers * 3 + totalStars;
};

/**
 * 排序选手数组
 * @param {array} players 选手数组
 */

const sortPlayers = function (players) {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
};


// --------------------------------下面是github相关接口

/**
/**
 * 根据用户名获取github用户信息
 * @param {string} username
 */

const getProfileByName = function (username = '') {
  // 这里使用字符串模板变量
  const uri = `/users/${username}`;

  if (username === '') {
    return Promise.reject('输入不能为空');
  }
  return xhr({
    url: uri,
    method: 'get',
  });
};

/**
 * 获取用户的仓库列表
 * @param {string} username
 */

const getUserRepos = function (username = '') {
  const uri = `/users/${username}/repos`;

  if (username === '') {
    return Promise.reject('输入不能为空');
  }

  return xhr({
    url: uri,
    method: 'get',
    params: {
      order: 'asc',
      sort: 'updated',
    },
  });
};


/**
 * 获取流行的仓库
 * @param {string} language
 */

const getPopularRepos = function (language = '') {
  if (language === '') {
    language = 'All';
  }

  const uri = encodeURI(`/search/repositories?q=stars:>1+language:${language}`);

  return xhr({
    url: uri,
    method: 'get',
    params: {
      order: 'desc',
      sort: 'stars',
      type: 'Repositories',
    },
  });
};

/**
 * 获取用户数据(包括用户信息和仓库列表)
 * @param {string} username
 */


const getUserData = function (username) {
  if (username === '') {
    return Promise.reject('输入不能为空');
  }

  // axios.all([]) 批量发送请求，等所有请求都有返回时，再执行统一的回调，并不是把所有的请求合并成同一个请求发送
  // 它返回的结果是一个数组，使用 axios.spread 可将数组 [res1,res2] 展开为 res1, res2
  return axios.all([getProfileByName(username), getUserRepos(username), ])
    .then(axios.spread((profile, repos) => {
      // console.log('getUserData:', profile, repos);
      return {
        profile: profile,
        score: calculateScore(profile, repos),
      };
    }));
};

/**
 * 选手对比战斗
 * @param {array} userNames 用户名数组
 */

const battleCompare = function (userNames) {
  return axios.all(userNames.map(getUserData))
    .then(sortPlayers);
};


export default {
  getStarCount,
  calculateScore,
  sortPlayers,

  getProfileByName,
  getUserRepos,
  getPopularRepos,
  getUserData,
  battleCompare,
};

