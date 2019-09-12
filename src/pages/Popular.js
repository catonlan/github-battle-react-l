import React from 'react';
import animate from '@jam3/gsap-promise';

class Popular extends React.Component {
  componentDidMount() {
    animate.from(this.topHeader, 0.2, {y: -200, delay: 0.1, });
  }

  render() {
    return (<div>
      <h1 ref={(c) => {this.topHeader = c;}}>热门项目</h1>
    </div>);
  }
}

export default Popular;
