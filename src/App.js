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
import BattleResult from './pages/BattleResult';

// import Loadable from 'react-loadable';
// import Loading from './components/Loading';

// const Home = Loadable({
//   loader: () => import('./pages/Home'),
//   loading: Loading,
// });

// const Battle = Loadable({
//   loader: () => import('./pages/Battle'),
//   loading: Loading,
// });

// const BattleResult = Loadable({
//   loader: () => import('./pages/BattleResult'),
//   loading: Loading,
// });
// const Popular = Loadable({
//   loader: () => import('./pages/Popular'),
//   loading: Loading,
// });
// const Search = Loadable({
//   loader: () => import('./pages/Search'),
//   loading: Loading,
// });

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div >
        <NavBar icon={<Icon type="ellipsis" />}
          onLeftClick={() => this.props.toggleSlidebar()}
          rightContent={
            <Avatar className="avatar"
              icon="user"
              src={this.props.user.avatar}
            />

          }
        >Github Battle</NavBar>
        <Drawer
          className="my-drawer"
          contentStyle={{color: '#A6A6A6', textAlign: 'center', }}

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
              path="/home"
            />
            <Route component={Battle}
              exact
              path="/battle"
            />
            <Route component={BattleResult}
              exact
              path="/battle/result"
            />
            <Route component={Popular}
              path="/popular"
            />
            <Route component={Search}
              path="/search"
            />

            <Route render={() => {
              return <p>Not Found</p>;
            }}
            />

          </Switch>
        </Drawer>


        {/*  底部栏 */}
        <Footbar realName="heheh"></Footbar>
      </div>

    );
  }
}
// 将state映射到props
const mapStateToProps = (state) => {
  return {
    slidebar: state.slidebar,
    user: state.user,
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
