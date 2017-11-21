import React, {Component} from 'react';
import {connect} from "react-redux";
import { actionCreatorAdd, actionCreatorSub } from "./actions/index";
import { bindActionCreators } from 'redux';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }


    add(){
        console.log('this', this);
        this.props.actionCreatorAdd();
    };

    sub(){
        console.log('this 2: ', this);
        this.props.actionCreatorSub();
        
    }


    render(){
        console.log("TOOOOOOOOOOOOOOO",this.props.counter);
        return (
            <div>
                <h1>Counter</h1>

                <div className="output">
                <h2>{this.props.counter}</h2>
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

function mapStateToProps(state){
    console.log("app.js , state:", state);
    return {
             counter: state
           };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({actionCreatorAdd, actionCreatorSub}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);