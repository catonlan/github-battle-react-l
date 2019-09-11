// 组件的生命周期
import React from 'react';
import {List, } from 'antd-mobile';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {opacity: 1.0, };
  }

  // 在第一次渲染后调用
  // componentDidMount() {
  //   this.timer = setInterval(function () {
  //     let {opacity, } = this.state;

  //     opacity -= 0.05;
  //     if (opacity < 0.1) {
  //       opacity = 1.0;
  //     }
  //     this.setState({
  //       opacity: opacity,
  //     });
  //   }.bind(this), 100);
  // }

  render() {
    return (
    // <div style={{opacity: this.state.opacity, }} >
    //           Hello {this.props.name}
    // </div>

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

export default Sidebar;
