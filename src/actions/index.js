import { ADD_NUMBER, SUB_NUMBER } from '../constans.js';

 export const actionCreatorAdd = ()=>{
    const action = {
        type: ADD_NUMBER
    }
    console.log('actionCreator: ', action);
    return action;
}

export const actionCreatorSub = () => {
    const action = {
        type: SUB_NUMBER
    }
    console.log("actionCreator: ", action);
    return action;
}