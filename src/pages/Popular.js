import React from 'react';
import animate from '@jam3/gsap-promise';
import Language from '../components/Language';
import {Toast, } from 'antd-mobile';
import {connect, } from 'react-redux';
import RepoGrid from '../components/RepoGrid';
import {changeLanguage, clearRepository, } from '../redux/actions/popular';

class Popular extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   selectedLang: 'All', // default state
    // };
  }


  componentDidMount() {
    animate.from(this.topHeader, 0.2, {y: -200, delay: 0.1, });
    this.updateLanguage(this.props.popular.selectedLang);
  }


  updateLanguage(lang) {
    Toast.loading('Loading...', 0);
    this.props.clear();
    this.props.changeLanguage(lang, () => {
      // 有结果后关闭loading
      Toast.hide();
    });
    return;
  }

  render() {
    return (<div>
      <h1 ref={(c) => {this.topHeader = c;}}>热门项目</h1>
      <Language

        onSelect={this.updateLanguage.bind(this)}

        selectedLang={this.props.popular.selectedLang}
      />

      {this.props.popular.repositories && <RepoGrid repos={this.props.popular.repositories}></RepoGrid>}
    </div>);
  }
}


// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => {
      dispatch(clearRepository());
    },

    changeLanguage: (v, callback) => {
      dispatch(changeLanguage(v, callback));
    },
  };
};

// 将state映射到 props
const mapStateToProps = (state) => {
  return {
    popular: state.popular,
  };
};

// 必须按照connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2)原型传参顺序
export default connect(mapStateToProps, mapDispatchToProps)(Popular);
