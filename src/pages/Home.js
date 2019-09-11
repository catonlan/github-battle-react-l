import React from 'react';
import {InputItem, WhiteSpace, } from 'antd-mobile';
import {connect, } from 'react-redux';
import {changeEmail, } from '../redux/actions/user';

class Home extends React.Component {
  render() {
    return (<div>
      <h1>首页</h1>
      <p>来试试GitHub pk 赛</p>
      <WhiteSpace />
      <div>
        <InputItem clear
          onChange={this.onChange}
          placeholder="请输入你的邮箱"
          value={this.props.user.email}
        >
          邮箱
        </InputItem>
        <WhiteSpace />
        <p>
          当前版本：<span>{process.env.REACT_APP_VERSION}</span>
        </p>
      </div>
    </div>);
  }
}

// export default Home;
// 将state映射到props
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    changeEmail: (v) => {
      dispatch(changeEmail(v));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
