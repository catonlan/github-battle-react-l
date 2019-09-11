// 组件的生命周期
import React from 'react';
import {List, } from 'antd-mobile';
import {connect, } from 'react-redux';
import {push, } from 'connected-react-router';
import thumbImg from '../assets/image/gray.png';
import {toggleSlidebar, } from '../redux/actions/slidebar';
import {switchFooterTab, } from '../redux/actions/footer';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {opacity: 1.0, };
  }


  render() {
    const menus = [
      {
        title: '首页',
        name: 'home',
        thumb: thumbImg,
      },
      {
        title: '对比',
        name: '/battle',
        thumb: thumbImg,
      },
      {
        title: '热门',
        name: '/popular',
        thumb: thumbImg,
      },
      {
        title: '搜索',
        name: '/search',
        thumb: thumbImg,
      },
    ];

    return (
      <List>
        {menus.map((menu, index) => {
          return (
            <List.Item key={index}
              onClick={() => this.props.sliderClick(menu.name)}
              thumb={menu.thumb}
            >
              {menu.title}

            </List.Item>
          );
        })}
      </List>
    );
  }
}

// 将state映射到props
const mapStateToProps = (state) => {
  return {
    state,
    // slidebar: state.slidebar,
    // footer: state.footer,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    sliderClick: (name) => {
      const url = '/' + name;

      console.log('slider click:', name);
      dispatch(toggleSlidebar());
      dispatch(switchFooterTab(name));

      console.log('sliderClick:', url);
      dispatch(push(url));
    },
  };
};

// export default Sidebar;
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
