// 底部栏组件

import React from 'react';
import {Icon as Aicon, } from 'antd';
import {TabBar, } from 'antd-mobile';


class Footbar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <List>
        {this.props.menus.map((menu, index) => {
          return (
            <List.Item key={index}
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


export default TabBar;
