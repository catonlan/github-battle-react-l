// 搜索用户仓库结果组件
import React from 'react';
import {FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {faStar, faCodeBranch, } from '@fortawesome/free-solid-svg-icons';


class SearchRepos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const repos = this.props.repos;

    return (
      <div className="profileRepos">
        <h4 style={{width: '100%', textAlign: 'center', }}>最新项目</h4>
        <ul className="space-list-items">
          {repos.length === 0 && <li><span className="noData">暂无数据</span></li>}
          {repos.length > 0 && repos.map((repo, idx) => {
            return (
              <li className="repo"
                key={idx}
              >
                <h3>
                  <a href="repo.html_url"
                    target="_blank"
                  >{repo.name}</a>
                </h3>
                <br/>
                <p>{repo.description}</p>
                <br/>
                <div className="stats">
                  <span>
                    <FontAwesomeIcon fixedWidth
                      icon={faStar}
                    />
                                        Stars: {repo.stargazers_count}
                  </span>
                  <span>
                    <FontAwesomeIcon fixedWidth
                      icon={faCodeBranch}
                    />
                                        Forks: {repo.stargazers_count}
                  </span>
                </div>
                <p>{repo.language ? `Min Language: ${repo.language}` : ''}</p>
                <br/>
                <a className="button-repo"
                  href={repo.html_url}
                >Repo</a>
              </li>
            );
          })}
        </ul>


      </div>
    );
  }
}

export default SearchRepos;
