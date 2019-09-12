import React from 'react';
import animate from '@jam3/gsap-promise';
import Language from '../components/Language';

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLang: 'All', // default state
    };
  }


  componentDidMount() {
    animate.from(this.topHeader, 0.2, {y: -200, delay: 0.1, });
  }

  updateLanguage(lang) {
    return lang;
  }

  render() {
    return (<div>
      <h1 ref={(c) => {this.topHeader = c;}}>热门项目</h1>
      <Language
        onSelect={this.updateLanguage}
        selectedLang={this.state.selectedLang}
      />
    </div>);
  }
}

export default Popular;
