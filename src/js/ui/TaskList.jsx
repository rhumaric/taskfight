import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import map from 'lodash/map';
import find from 'lodash/find';

import TaskListItem from './TaskListItem';
import messages from './messages';
import StoreError from '../store/StoreError';

@autobind
export default class TaskList extends Component {

  constructor () {
    super();
    this.state = {};
  }

  handleSubmit(event) {
    event.preventDefault();
    try {
      this.props.addTask(this.refs.title.value);

      this.refs.form.reset();
      this.state.taskAlreadyExists = false;
      this.setState({
        taskAlreadyExists:false
      });
    } catch (e) {

      if (!(e instanceof StoreError))  {
        throw e;
      }

      this.state.taskAlreadyExists = true;
      this.setState({
        taskAlreadyExists: true
      });
    }
  }

  confirmTaskRemoval(taskId) {

    const hasFought = find(this.props.fightlist, (fight) => {
      return (fight.task === taskId || fight.otherTask === taskId) &&
      !!fight.winner ;
    });

    const removeTask = !hasFought || confirm(messages.TASK_REMOVAL_CONFIRM);
    
    if (removeTask) {
      this.props.removeTask(taskId);
    }
  }

  maybeRenderError() {
    if (this.state.taskAlreadyExists) {
      return (
        <p className="tf-AddTaskForm__Error error">{messages.TASK_ALREADY_EXISTS}</p>
      )
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <form ref="form" className="tf-CenteredColumn tf-AddTaskForm" onSubmit={this.handleSubmit}>
          {this.maybeRenderError()}
          <input className="tf-AddTaskForm__Input tf-Input" size="1" type="text" ref="title" name="title" placeholder="..." required/>
          <button className="tf-AddTaskForm__Button tf-Button tf-Button-primary tf-Button-square" type="submit">+</button>
        </form>
        <ul className="tf-CenteredColumn">
          {map(this.props.tasks, (task,i) => {
            return <TaskListItem key={i} task={task} removeTask={this.confirmTaskRemoval} />
          })}
        </ul>
      </div>
    );
  }
}
