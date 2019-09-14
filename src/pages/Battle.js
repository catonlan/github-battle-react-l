import React from 'react';
import {InputItem, WhiteSpace, Button, Toast, } from 'antd-mobile';
import {Avatar, } from 'antd';
import {connect, } from 'react-redux';
import {changePlayerA, changePlayerB, } from '../redux/actions/battle';
import {push, } from 'connected-react-router';
import animate from '@jam3/gsap-promise';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    let playerA = this.props.user.email.split('@')[0];

    if (this.props.battle.player_a_name !== '') {
      playerA = this.props.battle.player_a_name;
    }

    this.state = {
      playerA: playerA,
    };
  }
  componentDidMount() {
    animate.from(this.topHeader, 0.2, { y: -200, delay: 0.1, });
  }

      onChangeA = (value) => {
        value = value.replace(/\s/g, '');
        if (value !== '') {
          this.props.changeA(value);
        }
        return;
      }
      onChangeB = (value) => {
        value = value.replace(/\s/g, '');
        if (value !== '') {
          this.props.changeB(value);
        }
        return;
      }

      willCompare = () => {
        setTimeout(() => {
          if (!this.props.battle.player_a_status) {
            return Toast.fail('选手A不存在！', 2);
          } else if (!this.props.battle.player_b_status) {
            return Toast.fail('选手B不存在！', 2);
          }

          return this.props.willCompare();
        }, 500); // 给点时间获取用户信息再跳转
      }

      render() {
        return (<div>
          <h1 ref={(c) => {this.topHeader = c;}}>对比战斗</h1>
          <InputItem
            //  {/** autoFocus设置自动获得焦点*/}
            autoFocus
            clear
            defaultValue={this.state.playerA}
            onBlur={this.onChangeA}
            placeholder="请输入选手A"
            // value={''}
          >
            <Avatar className="avatar"
              icon="user"
              src={this.props.battle.player_a_avatar}
            />
          </InputItem>
          <WhiteSpace />
          <InputItem
            clear
            defaultValue={this.props.battle.player_b_name}
            onBlur={this.onChangeB}
            placeholder="请输入选手B"

          >
            <Avatar className="avatar"
              icon="user"
              src={this.props.battle.player_b_avatar}
            />
          </InputItem>
          <WhiteSpace />
          <Button inline
            onClick={this.willCompare}
            style={{ marginRight: '4px', }}
            type="primary"
          >开始PK</Button>
        </div>);
      }
}

// 将state映射到props
const mapStateToProps = (state) => {
  return {
    user: state.user,
    battle: state.battle,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    changeA: (v) => {
      dispatch(changePlayerA(v));
    },

    changeB: (v) => {
      dispatch(changePlayerB(v));
    },
    willCompare: () => {
      dispatch(push('/battle/result'));
    },
  };
};

// export default Battle;
export default connect(mapStateToProps, mapDispatchToProps)(Battle);
