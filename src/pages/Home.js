import React from 'react';
import {InputItem, WhiteSpace, } from 'antd-mobile';

class Home extends React.Component {
  render() {
    return (<div>
      <h1>首页</h1>
      <p>来试试GitHub pk 赛</p>
      <WhiteSpace />
      <div>
        <InputItem clear
          placeholder="请输入你的邮箱"
        >
          邮箱
        </InputItem>
      </div>
    </div>);
  }
}

export default Home;
