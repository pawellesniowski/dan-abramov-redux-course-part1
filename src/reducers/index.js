import { ADD_NUMBER, SUB_NUMBER } from "../constans.js";



function output(state=0, action){
    let output = null;
    switch(action.type){
        case ADD_NUMBER:
        console.log("state from reducer: ", state);
            output = state + 1;
            console.log('reducers/output: ', output);
            return output;

        case SUB_NUMBER: 
            output = state - 1;
            console.log('reducers/output: ', output);
            return output;

        default: 
            return state;
    }
}

export default output;
