import React, { Component } from 'react';
//import { changeName, changeStatus, initializeForm, requestData, receiveDataSuccess, receiveDataFailed } from '../actions';
import Form from './Form'
import List from './List'
import '../App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Form 
          taskName={this.props.taskName}
          taskType={this.props.taskType}
          changeTaskName={this.props.changeTaskName}
          changeTaskType={this.props.changeTaskType}
          initializeForm={this.props.initializeForm}
        />
        <List store={this.props.store}/>
      </div>
    );
  }
}

export default App;
