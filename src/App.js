import React from 'react';
import { Icon as Aicon, } from 'antd';
import {Drawer, List, NavBar, TabBar, Icon, } from 'antd-mobile';
import './App.less';
import thumbImg from './assets/image/gray.png';

class App extends React.Component {
  state = {
    open: false,
    selectedTab: 'redTab',
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

    const sidebar = (<List>
      {menus.map((menu, index) => {
        return (<List.Item key={index}
          thumb={menu.thumb}
                > {menu.title} </List.Item>);
      })}
    </List>);

    return (
      <div className="App">
        <NavBar icon={<Icon type="ellipsis" />}
          onLeftClick={this.onOpenChange}
        >Battle</NavBar>
        <Drawer
          className="my-drawer"
          contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42, }}
          enableDragHandle
          onOpenChange={this.onOpenChange}
          open={this.state.open}
          sidebar={sidebar}
          style={{minHeight: document.documentElement.clientHeight - 95, }}

        >
          主体内容在这里。Github battle
        </Drawer>

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
            key="Life"
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            selected={this.state.selectedTab === 'blueTab'}
            selectedIcon={<Aicon style={{ fontSize: '20px', }}
              theme="twoTone"
              type="home" />}
            title="首页"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<Aicon style={{ fontSize: '20px', }}
              type="compass"
            />}
            key="Koubei"
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            selected={this.state.selectedTab === 'redTab'}
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
            key="Friend"
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
            selected={this.state.selectedTab === 'greenTab'}
            selectedIcon={<Aicon style={{ fontSize: '20px', }}
              theme="twoTone"
              type="fire" />}
            title="热门"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<Aicon style={{ fontSize: '20px', }}
              type="question-circle"
            />}
            key="my"
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
            selected={this.state.selectedTab === 'yellowTab'}
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
