import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
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
      <div className="Root">
        <Typography variant="h4" gutterBottom>Current Time</Typography>
        <Typography variant="body1">
          <Moment date={this.state.date} format="DD MMMM YYYY HH:mm:ss" />
        </Typography>
      </div>
    )
  }
}

export default Clock;