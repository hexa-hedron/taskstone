import { connect } from 'react-redux';
import * as actions from '../actions/App';
import App from '../components/App';

const mapStateToProps = state => {
    console.log(state)

    return {
        taskName: state.form.taskName,
        taskType: state.form.taskType,
        task: state.task,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTaskName: (taskName) => dispatch(actions.changeTaskName(taskName)),
        changeTaskType: (taskType) => dispatch(actions.changeTaskType(taskType)),
        initializeForm: () => dispatch(actions.initializeForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)