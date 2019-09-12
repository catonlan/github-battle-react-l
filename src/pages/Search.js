import React from 'react';
import animate from '@jam3/gsap-promise';

class Search extends React.Component {
  componentDidMount() {
    animate.from(this.topHeader, 0.2, {y: -200, delay: 0.1, });
  }
  render() {
    return (<div>
      <h1 ref={(c) => {this.topHeader = c;}}>搜索</h1>
    </div>);
  }
}

export default Search;
