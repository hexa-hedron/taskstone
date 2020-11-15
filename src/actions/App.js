export const CHANGE_TASK_NAME = 'CHANGE_TASK_NAME';
export const CHANGE_TASK_TYPE = 'CHANGE_TASK_TYPE';
export const INITIALIZE_FORM = 'INITIALIZE_FORM';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const chageTaskName = (taskName) => {
    return{
        type: CHANGE_TASK_NAME,
        payload: { taskName }
    };
}

export const changeTaskType = (taskType) => {
    return{
        type: CHANGE_TASK_TYPE,
        payload: { taskType }
    }
}

export const initializeForm = () =>{
    return{
        type: INITIALIZE_FORM
    }
}

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: { task }
    };
}

export const completeTask = (task) => {
    return{
        type: COMPLETE_TASK,
        payload: { task }
    };
}

export const deleteTask = (task) => {
    return{
        type: DELETE_TASK,
        payload: { task }
    };
}