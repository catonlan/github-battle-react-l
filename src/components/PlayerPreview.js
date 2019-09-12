// 选手预览组件

import React from 'react';
import PropTypes from 'prop-types';


class PlayerPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="column">
          <img alt={'Avatar for' + this.props.username}
            src={this.props.avatar}
          />
          <h2 className="username">@{this.props.username}</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}


// 检查类型
PlayerPreview.PropTypes = {
  avatar: PropTypes.string.isRequired, // 必传属性
  username: PropTypes.string.isRequired,
};


export default PlayerPreview;
