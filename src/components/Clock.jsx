import React,{Component} from"react";

class Clock extends Component {
    state = {
        date: new Date()
    };

    updateTime(){
        setInterval(() => {
        this.setState({date: new Date})  
        },1000)
    }
    render(){
        return(
            <div className="App">
                {/* Clock */}
                <h3>{this.state.date.toLocaleTimeString()}</h3>
                {this.updateTime()}
            </div>
        )
    }
}

export default Clock;