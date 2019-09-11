// 底部栏组件

import React from 'react';
import {Icon as Aicon, } from 'antd';
import {TabBar, } from 'antd-mobile';
import {connect, } from 'react-redux';
import {switchFooterTab, } from '../redux/actions/footer';


class Footbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TabBar
        barTintColor="white"
        hidden={this.props.footer.footerHidden}
        tintColor="#33A3F4"
        unselectedTintColor="#949494"
      >

        <TabBar.Item
          data-seed="logId"
          icon={<Aicon style={{ fontSize: '20px', }}
            type="home"
          />}
          key="Home"
          onPress={() => this.props.switchFooterTab('home')}
          selected={this.props.footer.footerActive === 'home'}
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
          onPress={() => this.props.switchFooterTab('battle')}
          selected={this.props.footer.footerActive === 'battle'}
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
          key="Popular"
          onPress={() => this.props.switchFooterTab('Popular')}
          selected={this.props.footer.footerActive === 'Popular'}
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
          key="Search"
          onPress={() => this.props.switchFooterTab('search')}
          selected={this.props.footer.footerActive === 'search'}
          selectedIcon={<Aicon style={{ fontSize: '20px', }}
            theme="twoTone"
            type="question-circle"
          />}
          title="搜索"
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}
// 将state映射到props
const mapStateToProps = (state) => {
  return {

    footer: state.footer,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {


    switchFooterTab: (name) => {
      console.log('switchFooterTab 触发后进入分发器 dispatch, 0000');
      dispatch(switchFooterTab(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footbar);

