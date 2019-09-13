import React from 'react';
import {InputItem, WhiteSpace, } from 'antd-mobile';
import {connect, } from 'react-redux';
import {changeEmail, } from '../redux/actions/user';
import animate from '@jam3/gsap-promise';

class Home extends React.Component {
  componentDidMount() {
    animate.from(this.topHeader, 0.2, {y: -200, delay: 0.1, });
  }

  onChange = (value) => {
    value = value.replace(/\s/g, '');
    return this.props.changeEmail(value);
  }

  render() {
    return (
      <div>
        {/** eslint react/no-string-refs规则禁止使用如 ref="topHeader" 的字符串ref引用 */}
        {/** 参考https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md,使用如下 */}
        <div ref={(c) => {this.topHeader = c;}}>
          <h1>首页</h1>
          <p>来试试GitHub pk 赛</p>
        </div>
        <WhiteSpace />
        <div>
          <InputItem clear
            defaultValue={this.props.user.email}
            onBlur={this.onChange}
            placeholder="请输入你的邮箱"
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
