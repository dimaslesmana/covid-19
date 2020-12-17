import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Fragment>
        <h3><Moment date={this.state.date} format="DD MMMM YYYY HH:mm:ss" /></h3>
      </Fragment>
    )
  }
}

export default Clock;