import React from 'react';
import { Icon as Aicon, } from 'antd';
import {Drawer, NavBar, TabBar, Icon, } from 'antd-mobile';
import './App.less';
import thumbImg from './assets/image/gray.png';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  state = {
    open: false,
    selectedTab: 'home',
    hidden: false,
    fullScreen: false,
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({open: !this.state.open, });
  }

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
          onLeftClick={this.onOpenChange}
        >Github Battle</NavBar>
        <Drawer
          className="my-drawer"
          contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42, }}
          enableDragHandle
          onOpenChange={this.onOpenChange}
          open={this.state.open}
          sidebar={<Sidebar menus={menus} />}
          style={{minHeight: document.documentElement.clientHeight - 95, }}

        >
          主体内容在这里。Github battle
        </Drawer>


        {/*  底部栏 */}
        <TabBar
          barTintColor="white"
          hidden={this.state.hidden}
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
                selectedTab: 'home',
              });
            }}
            selected={this.state.selectedTab === 'home'}
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
                selectedTab: 'battle',
              });
            }}
            selected={this.state.selectedTab === 'battle'}
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
                selectedTab: 'fire',
              });
            }}
            selected={this.state.selectedTab === 'fire'}
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
                selectedTab: 'search',
              });
            }}
            selected={this.state.selectedTab === 'search'}
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

export default App;
