// 搜索用户结果组件

import React from 'react';
import {FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {faMapMarker, faCodeBranch, faStickyNote, faUsers, faCalendar, } from '@fortawesome/free-solid-svg-icons';
import animate from '@jam3/gsap-promise';


class SearchUser extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.slede();
  }

  componentDidUpdate() {
    // this.slede()
  }

  slede() {
    animate.staggerFrom(
      '.profileInfo',
      0.5,
      {
        x: -1500,
        opacity: 0.5,
        delay: 0.2,
      },
      0.055
    );
  }

  render() {
    const profile = this.props.profile;
    const date = new Date(profile.created_at);
    const readableMonth = date.toLocaleString('zh', {month: 'long', });

    return (

      <div className="profileInfo">
        <div className="profileLogo">
          <img alt={profile.login}
            className="avatar"
            src={profile.avatar_url}
          />
          <h3>
            <a href={profile.html_url}>{profile.login}</a>
          </h3>
        </div>
        <div>
          <h3>{profile.name}</h3>
          <p>
            <FontAwesomeIcon fixedWidth
              icon={faMapMarker}
            />
            {profile.location}
          </p>
          {profile.company && <h4>Company:{profile.company}</h4>}
          {profile.bio && <p>{profile.bio}</p>}
        </div>
        <div>
          <h4>
            <a href={profile.blog}>
              {profile.blog}
            </a>
          </h4>
          <p>
            <FontAwesomeIcon fixedWidth
              icon={faCodeBranch}
            />
                        Repos:
            {profile.public_repos}
          </p>
          <p>
            <FontAwesomeIcon fixedWidth
              icon={faStickyNote}
            />
                        Gists:
            {profile.public_gists}
          </p>
          <p>
            <FontAwesomeIcon fixedWidth
              icon={faUsers}
            />
                        Followers:
            {profile.followers}
          </p>
          <p>
            <FontAwesomeIcon fixedWidth
              icon={faUsers}
            />
                        Following:
            {profile.following}
          </p>
          <h5>
            <FontAwesomeIcon fixedWidth
              icon={faCalendar}
            />
                        Member since:
            {readableMonth}, {date.getFullYear()}
          </h5>
        </div>
      </div>
    );
  }
}


export default SearchUser;
