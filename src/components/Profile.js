// 用户资料组件

import React from 'react';
import PropTypes from 'prop-types';
import PlayerPreview from './PlayerPreview';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const info = this.props.info;

    return (
      <PlayerPreview avatar={info.avatar_url}
        username={info.login}
      >
        <ul className="space-list-items">
          <li><span className="itemName">Followers: </span><span className="itemVal">{info.followers}</span></li>
          <li><span className="itemName">Following: </span><span className="itemVal">{info.following}</span></li>
          <li><span className="itemName">Public Repos:</span><span className="itemVal">{info.public_repos}</span></li>

          {/** 以下属性,若存在,则显示 */}
          {info.name && <li><span className="itemName">用户：</span><span className="itemVal">{info.name}</span></li>}
          {info.location && <li><span className="itemName">地区：</span><span className="itemVal">{info.location}</span></li>}
          {info.company && <li><span className="itemName">公司：</span><span className="itemVal">{info.company}</span></li>}
          {info.blog && (
            <li>
              <span className="itemName">博客：</span><span className="itemVal">{info.blog}</span>
            </li>
          )}
        </ul>

      </PlayerPreview>
    );
  }
}

Profile.PropTypes = {
  info: PropTypes.object.isRequired,
};

export default Profile;

