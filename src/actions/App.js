export const chageTaskName = (task) => {
    return{
        type: 'CHANGE_TASK_NAME',
        payload: { task }
    };
}

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: { task }
    };
}

export const completeTask = (task) => {
    return{
        type: 'COMPLETE_TASK',
        payload: { task }
    };
}

export const deleteTask = (task) => {
    return{
        type: 'DELETE_TASK',
        payload: { task }
    };
}