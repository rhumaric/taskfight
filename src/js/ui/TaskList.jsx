import React, { Component } from 'react';
import autobind from 'autobind-decorator';

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
  maybeRenderError() {
    if (this.state.taskAlreadyExists) {
      return (
        <p className="error">{messages.TASK_ALREADY_EXISTS}</p>
      )
    }
  }
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          {this.maybeRenderError()}
          <input type="text" ref="title" name="title" placeholder="..." required/>
          <button type="submit">+</button>
        </form>
        <ul>
          {this.props.tasks.map((task,i) => {
            return <TaskListItem key={i} index={i} task={task} />
          })}
        </ul>
      </div>
    );
  }
}
