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
          {info.name && <li>{info.name}</li>}
          {info.location && <li>{info.location}</li>}
          {info.company && <li>{info.company}</li>}
          <li>Followers: {info.followers}</li>
          <li>Following: {info.Following}</li>
          <li>Public Repos: {info.Public_Repos}</li>
          {info.blog && (
            <li>
              <a href={info.blog}>{info.blog}</a>
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

