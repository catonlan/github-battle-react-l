import React from 'react';
import {connect, } from 'react-redux';
import resultImg from '../assets/image/battle_result.png';
import {Toast, WhiteSpace, } from 'antd-mobile';
import {push, } from 'connected-react-router';
import {compareClear, compareResult, } from '../redux/actions/battle';
import Player from '../components/Player';
import animate from '@jam3/gsap-promise';


class BattleResult extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   winner: null,
    //   loser: null,
    //   show: false,
    // };
  }

  // 在挂载之前被调用
  componentWillMount() {

  }


  // 组件挂载后 （插入 DOM树种）立即调用
  componentDidMount() {
    this.doCompare();
  }

  // 在已挂载的组件接收新的 props 之前被调用,用以更新状态state
  componentWillReceiveProps(nextProps) {
    if (process.env.NODE_ENV === 'development') {
      console.log('componentWillReceiveProps:', nextProps);
    }
  }


  slede() {
    animate.staggerFrom(
      '.battleResult',
      0.5,
      {
        x: -1500,
        opacity: 0.5,
        delay: 0.2,
      },
      0.055
    );
  }


  // 执行比较
    doCompare = () => {
      if (!this.props.battle.player_a_status || !this.props.battle.player_b_status) {
        Toast.fail('需要有2个选手才能pk！', 2);
        this.props.inputCompare();
        return;
        //   } else if (!this.props.battle.player_b_status) {
        //     Toast.fail('选手B不存在！', 2);
        //     this.props.inputCompare();
        //     return;
      }

      Toast.loading('Loading...', 0);
      this.props.clear();
      this.props.doCompare([this.props.battle.player_a_name, this.props.battle.player_b_name, ], () => {
        // 有结果后关闭loading
        Toast.hide();
        this.slede();
      });

      //   console.log('res:', res);
      return;
    }


    render() {
      const { player_winner, player_loser, } = this.props.battle;

      // 条件渲染
      if (this.props.battle.battle_result === 0) {
        return (<div></div>);
      } else if (this.props.battle.battle_result === -1) {
        return (<div>PK失败</div>);
      }
      return (
        <div className="row">
          <div className="resImg">
            <img src={resultImg} ></img>
          </div>
          <Player label="胜出"
            profile={player_winner.profile}
            score={player_winner.score}
          />
          <WhiteSpace />
          <Player label="战败"
            profile={player_loser.profile}
            score={player_loser.score}
          />
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

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    // 跳转到输入页面
    inputCompare: () => {
      setTimeout(() => {
        dispatch(push('/battle'));
      }, 2000);
    },

    clear: () => {
      dispatch(compareClear());
    },

    doCompare: (userNames, callback) => {
      dispatch(compareResult(userNames, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleResult);
