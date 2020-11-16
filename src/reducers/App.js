import { combineReducers } from 'redux'
import { CHANGE_TASK_NAME,CHANGE_TASK_TYPE,INITIALIZE_FORM,ADD_TASK,COMPLETE_TASK,DELETE_TASK } from '../actions/App'

const initialState = {
    user: {
        id: 0,
        name: '',
        point: 0
    },
    form: {
        taskName: '',
        taskType: 0
    },
    task: {
        tasks: [[],[],[],[]]
    }
}

// フォーム上の変更を受け取る
const formReducer = (state = initialState.form, action) => {
    switch(action.type){
        case CHANGE_TASK_NAME:
            return{
                ...state,
                taskName: action.taskName,
            }
        case CHANGE_TASK_TYPE:
            return{
                ...state,
                taskType: action.taskType,
            }
        case INITIALIZE_FORM:
            return initialState.form
        default:
            return state
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

const rootReducer = combineReducers({
    form: formReducer, 
    task: taskReducer
});

export default rootReducer;