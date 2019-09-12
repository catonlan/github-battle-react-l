import React from 'react';
import animate from '@jam3/gsap-promise';
import {InputItem, Button, WhiteSpace, } from 'antd-mobile';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    animate.from(this.topHeader, 0.2, {y: -200, delay: 0.1, });
  }

  conChange(value) {
    value = value.replace(/\s/g, '');
    this.setState({username: value, });
  }

  willSearch() {

  }
  render() {
    return (<div>
      <h1 ref={(c) => {this.topHeader = c;}}>搜索</h1>
      <WhiteSpace />
      <div>
        <InputItem
          clear
          defaultValue={this.onChange}
          placeholder="请输入要查找的用户名"
        >
        用户
        </InputItem>
        <WhiteSpace />
        <Button
          inline
          onClick={this.willSearch}
          style={{marginRight: '4px', }}
          type="primary"
        >
        查找
        </Button>
      </div>
    </div>);
  }
}

export default Search;
