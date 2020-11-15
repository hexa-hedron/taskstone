import { combineReducers } from 'redux'

const initialState = {
    user: {
        id: 0,
        name: '',
        point: 0
    },
    form: {
        taskname: '',
        taskType: 0
    },
    task: {
        tasks: []
    }
}

// フォーム上の変更を受け取る
const formReducer = (state = initialState, action) => {
    switch(action.type){
        // TODO
        default:
            return state;
    }
}

// DBからデータを取得した後stateを受け取る
const taskReducer = (state = initialState, action) => {
    switch(action.type){
        // TODO
        default:
            return state;
    } 
}

const rootReducer = combineReducers(formReducer, taskReducer);

export default rootReducer;