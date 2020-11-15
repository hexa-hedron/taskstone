import { combineReducers } from 'redux'

const initialState = {

}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const listReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    } 
}

const rootReducer = combineReducers(taskReducer, listReducer);

export default rootReducer;