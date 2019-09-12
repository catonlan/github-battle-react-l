import React from 'react';
import {connect, } from 'react-redux';
import api from '../api';


class BattleResult extends React.Component {
  // 组件挂载后 （插入 DOM树种）立即调用
  componentDidMount() {
    api.getUserData('kakuilan');
  }
  render() {
    return (
      <div>
                结果
      </div>
    );
  }
}


// 将映state射到props
const mapStateToProps = (state) => {
  return {
    battle: state.battle,
  };
};

export default connect(mapStateToProps)(BattleResult);
