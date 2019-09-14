import React from 'react';
import PropTypes from 'prop-types';


class Language extends React.Component {
  render() {
    const languages = [
      'All',
      'Go',
      'Javascript',
      'Ruby',
      'Java',
      'Shell',
      'Python',
      'PHP',
    ];

    return (
      <ul className="languages">
        {/** 以下this.props.onSelect.bind(null, lang)函数绑定: bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。 */}
        {/** 参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind */}
        {languages.map((lang) => (
          <li
            className={lang === this.props.selectedLang ? 'selected' : ''}
            key={lang}
            onClick={this.props.onSelect.bind(null, lang)}
          >
            {lang}
          </li>
        ))}
      </ul>
    );
  }
}

Language.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,

};


export default Language;
