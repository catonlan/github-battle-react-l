// 修改axios全局配置
import axios from 'axios';

// axios 全局配置
axios.defaults.timeout = 5000; // 超时时间,毫秒
axios.defaults.withCredentials = false; // 是否携带cookie
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// 注意,实例中无法使用全局拦截器

// request拦截器
axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

// respone拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
