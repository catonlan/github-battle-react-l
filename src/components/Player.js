import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';


class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="header">{this.props.label}</h1>
        <h3 style={{textAlign: 'center', }}>Score:{this.props.score}</h3>
        <Profile info={this.props.Profile} />
      </div>
    );
  }
}

Player.PropTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
};


export default Player;
