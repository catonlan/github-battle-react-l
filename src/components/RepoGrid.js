import React from 'react';
import PropTypes from 'prop-types';
// import animate from '@jam3/gsap-promise';

import LazyLoad from 'react-lazy-load';

class RepoGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
  }


  componentDidMount() {
    // animate.staggerFrom(
    //   '.popular-item',
    //   0.5,
    //   {
    //     x: -1500,
    //     opacty: 0.5,
    //     delay: 0.2,
    //   },
    //   0.035
    // );
    // setState更新的数据必须是对象
    this.setState({mounted: true, });
  }

  // 组件更新之后触发
  componentDidUpdate() {
    // animate.staggerFrom(
    //   '.popular-item',
    //   0.5,
    //   {
    //     x: -1500,
    //     opacity: 0.5,
    //     delay: 0.2,
    //   },
    //   0.035
    // );
  }

  render() {
    const repos = this.props.repos;

    return (
      <a className="popular-list">
        {repos.map((repo, index) => {
          return (
            <li className="popular-item"
              // className={`popular-item ${index % 2 ? 'to-right' : 'to-left'}`}
              key={repo.name}
            >
              <div className="popular-rank">#{index + 1}</div>
              <a className="space-list-items">
                <li>
                  <LazyLoad height={150}
                    offsetVertical={200}
                  >
                    <img alt={`Avatar for ${repo.owner.login}`}
                      className="avatar"
                      src={repo.owner.avatar_url}
                    />
                  </LazyLoad>
                </li>

                <a>
                  <a href={repo.html_url}>
                    {repo.name}
                  </a>
                </a>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </a>
            </li>
          );
        })}
      </a>
    );
  }
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoGrid;
