import React from 'react';
import {Drawer, List, NavBar, TabBar, Icon, } from 'antd-mobile';
import './App.less';
import thumbImg from './assets/image/gray.png';

class App extends React.Component {
  state = {
    open: true,
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
          style={{minHeight: document.documentElement.clientHeight - 100, }}

        >
          Github battle
        </Drawer>

        <TabBar
          barTintColor="white"
          hidden={this.state.hidden}
          tintColor="#33A3F4"
          unselectedTintColor="#949494"
        >
          <TabBar.Item
            badge={1}
            data-seed="logId"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat', }}
                  />
            }
            key="Life"
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            selected={this.state.selectedTab === 'blueTab'}
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat', }}
                          />
            }
            title="Life"
          >
          11111111
          </TabBar.Item>
          <TabBar.Item
            badge={'new'}
            data-seed="logId1"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat', }}
              />
            }
            key="Koubei"
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            selected={this.state.selectedTab === 'redTab'}
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat', }}
              />
            }
            title="Koubei"
          >
          22222222222
          </TabBar.Item>
          <TabBar.Item
            dot
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat', }}
              />
            }
            key="Friend"
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
            selected={this.state.selectedTab === 'greenTab'}
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat', }}
              />
            }
            title="Friend"
          >
          3333333333
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg', }}
            key="my"
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
            selected={this.state.selectedTab === 'yellowTab'}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg', }}
            title="My"
          >
          44444444
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default App;
