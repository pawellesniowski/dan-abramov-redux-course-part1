import React, {Component} from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter: 1
        }
    }


    add(){
        console.log(this.state.counter);
        this.setState({
            counter: this.state.counter+1
        })
    };

    sub(){
        console.log(this.state.counter);
        this.setState({
            counter: this.state.counter-1
        })
    }



    render(){

        return (
            <div>
                <h1>Counter</h1>

                <div className="output">
                <h2>{this.state.counter}</h2>
                </div>

                <button 
                    className="btn"
                    onClick={()=>this.add()}
                >
                    +
                </button>

                <button
                    className="btn"
                    onClick={()=>this.sub()}
                >
                    -
                </button>

          </div>
        );
    };

};

export default App;