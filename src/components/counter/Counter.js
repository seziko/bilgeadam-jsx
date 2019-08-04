import React,{Component} from'react';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }


    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count" style={{fontSize:"50px",padding: "15px 30px"}}>
                    {this.state.counter}
                </span>
            </div>
        );
    }


     increment() {
        console.log("increment");
        this.setState({counter: this.state.counter+this.props.by});



    }
}

export default Counter;