import React from 'react';


class Loading extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.isLoading) {
      if (this.props.timedOut) {
        return <div>Loader timed out!</div>;
      } else if (this.props.pastDelay) {
        return <div>Loading....xxx....</div>;
      }
      return null;
    } else if (this.props.error) {
      return <div>Error! Component failed to load</div>;
    }
    return null;
  }
}

export default Loading;
