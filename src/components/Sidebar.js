// 组件的生命周期
import React from 'react';
import {List, } from 'antd-mobile';
import {Link, } from 'react-router-dom';
import thumbImg from '../assets/image/gray.png';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {opacity: 1.0, };
  }


  render() {
    const menus = [
      {
        title: '首页',
        path: '/',
        thumb: thumbImg,
      },
      {
        title: '对比',
        path: '/battle',
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

    return (
      <List>
        {menus.map((menu, index) => {
          return (
            <List.Item key={index}
              thumb={menu.thumb}
            >
              <Link className="button"
                to={menu.path}
              >

                {menu.title}
              </Link>

            </List.Item>
          );
        })}
      </List>
    );
  }
}

export default Sidebar;
