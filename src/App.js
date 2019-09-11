import React from 'react';
import {Avatar, } from 'antd';
import {Drawer, NavBar, Icon, } from 'antd-mobile';
import './styles/App.less';
import { Route, Switch, } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footbar from './components/Footbar';
import {connect, } from 'react-redux';
import {toggleSlidebar, } from './redux/actions/slidebar';
import Home from './pages/Home';
import Battle from './pages/Battle';
import Popular from './pages/Popular';
import Search from './pages/Search';


class App extends React.Component {
  render() {
    return (

      <div className="App">
        <NavBar icon={<Icon type="ellipsis" />}
          onLeftClick={() => this.props.toggleSlidebar()}
          rightContent={
            <Avatar className="avatar"
              icon="user"
              src="http://www.gravatar.com/avatar"
            />

          }
        >Github Battle</NavBar>
        <Drawer
          className="my-drawer"
          contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42, }}
          enableDragHandle
          onOpenChange={() => this.props.toggleSlidebar()}
          open={this.props.slidebar.sliderOpen}
          sidebar={<Sidebar />}
          style={{minHeight: document.documentElement.clientHeight - 95, }}

        >
          <Switch>
            <Route component={Home}
              exact
              path="/"
            />
            <Route component={Home}
              exact
              path="/Home"
            />
            <Route component={Battle}
              exact
              path="/battle"
            />
            <Route component={Popular}
              path="/popular"
            />
            <Route component={Search}
              path="/search"
            />

            <Route render={function () {
              return <p>Not Found</p>;
            }}
            />

          </Switch>
        </Drawer>


        {/*  底部栏 */}
        <Footbar></Footbar>
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
      console.log('toggleSlidebar 触发后进入分发器dispatch, 0000');
      dispatch(toggleSlidebar());
    },

    // switchFooterTab: (name) => {
    //   console.log('switchFooterTab 触发后进入分发器 dispatch, 0000');
    //   dispatch(switchFooterTab(name));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
