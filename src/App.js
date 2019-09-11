import React from 'react';
import { Icon as Aicon, } from 'antd';
import {Drawer, NavBar, TabBar, Icon, } from 'antd-mobile';
import './styles/App.less';
import thumbImg from './assets/image/gray.png';
import Sidebar from './components/Sidebar';
import {connect, } from 'react-redux';
import {toggleSlidebar, } from './redux/actions/slidebar';

class App extends React.Component {
  state = {
    sliderOpen: false,
    footerActive: 'home',
    footerHidden: false,
    // fullScreen: false,
  }
  // onOpenChange = (...args) => {
  //   console.log(args);
  //   this.setState({sliderOpen: !this.state.sliderOpen, });
  // }

  render() {
    const menus = [
      {
        title: '首页',
        path: '/',
        thumb: thumbImg,
      },
      {
        title: '热门',
        path: '/popular',
        thumb: thumbImg,
      },
      {
        title: '搜索',
        path: '/search',
        thumb: thumbImg,
      },

    ];

    // const sidebar = (<List>
    //   {menus.map((menu, index) => {
    //     return (<List.Item key={index}
    //       thumb={menu.thumb}
    //             > {menu.title} </List.Item>);
    //   })}
    // </List>);

    return (
      <div className="App">
        <NavBar icon={<Icon type="ellipsis" />}
          onLeftClick={() => this.props.toggleSlidebar()}
        >Github Battle</NavBar>
        <Drawer
          className="my-drawer"
          contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42, }}
          enableDragHandle
          onOpenChange={this.onOpenChange}
          open={this.props.slidebar.sliderOpen}
          sidebar={<Sidebar menus={menus} />}
          style={{minHeight: document.documentElement.clientHeight - 95, }}

        >
          主体内容在这里。Github battle
        </Drawer>


        {/*  底部栏 */}
        <TabBar
          barTintColor="white"
          hidden={this.state.footerHidden}
          tintColor="#33A3F4"
          unselectedTintColor="#949494"
        >
          <TabBar.Item
            data-seed="logId"
            icon={<Aicon style={{ fontSize: '20px', }}
              type="home"
            />}
            key="Home"
            onPress={() => {
              this.setState({
                footerActive: 'home',
              });
            }}
            selected={this.state.footerActive === 'home'}
            selectedIcon={<Aicon style={{ fontSize: '20px', }}
              theme="twoTone"
              type="home"
            />}
            title="首页"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<Aicon style={{ fontSize: '20px', }}
              type="compass"
            />}
            key="Battle"
            onPress={() => {
              this.setState({
                footerActive: 'battle',
              });
            }}
            selected={this.state.footerActive === 'battle'}
            selectedIcon={<Aicon style={{ fontSize: '20px', }}
              theme="twoTone"
              type="compass"
            />}
            title="对比"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<Aicon style={{ fontSize: '20px', }}
              type="fire"
            />}
            key="Fire"
            onPress={() => {
              this.setState({
                footerActive: 'fire',
              });
            }}
            selected={this.state.footerActive === 'fire'}
            selectedIcon={<Aicon style={{ fontSize: '20px', }}
              theme="twoTone"
              type="fire"
            />}
            title="热门"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<Aicon style={{ fontSize: '20px', }}
              type="question-circle"
            />}
            key="Search"
            onPress={() => {
              this.setState({
                footerActive: 'search',
              });
            }}
            selected={this.state.footerActive === 'search'}
            selectedIcon={<Aicon style={{ fontSize: '20px', }}
              theme="twoTone"
              type="question-circle"
            />}
            title="搜索"
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
// 将state映射到props
const mapStateToProps = (state) => {
  return {
    slidebar: state.slidebar,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSlidebar: () => {
      console.log('触发后进入分发器dispatch, 0000');
      dispatch(toggleSlidebar());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
