import React, { Component, Fragment } from 'react';

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

    render(){
        return(
            <Fragment>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
            </Fragment>
        )
    }
}

export default Clock;