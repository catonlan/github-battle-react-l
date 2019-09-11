import React from 'react';
import {InputItem, WhiteSpace, Button,} from 'antd-mobile';
import {Avatar,} from 'antd';

class Battle extends React.Component {
      onChange = () => {

      }

      render() {
        return (<div>
          <h1>对比战斗</h1>
          <InputItem
            clear
            onChange={this.onChange}
            placeholder="请输入选手A"
            value={''}
          >
            <Avatar className="avatar"
              icon="user"
              src=""
            />
          </InputItem>
          <WhiteSpace />
          <InputItem
            clear
            onChange={this.onChange}
            placeholder="请输入选手B"
            value={''}
          >
            <Avatar className="avatar"
              icon="user"
              src=""
            />
          </InputItem>
          <WhiteSpace />
          <Button inline
            style={{ marginRight: '4px', }}
            type="primary"
          >开始PK</Button>
        </div>);
      }
}

export default Battle;
