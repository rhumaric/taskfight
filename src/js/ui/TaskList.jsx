import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import TaskListItem from './TaskListItem';

export default class TaskList extends Component {

  @autobind
  handleSubmit(event) {
    event.preventDefault();
    this.props.addTask(this.refs.title.value);
  }
  render() {
    return (
      <div>
        <form ref="addTaskForm" onSubmit={this.handleSubmit}>
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
