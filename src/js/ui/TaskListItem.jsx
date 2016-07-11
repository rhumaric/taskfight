import React, { Component } from 'react';

export default class TaskListItem extends Component {
  render() {
    return (
      <li onClick={this.props.removeTask.bind(null, this.props.task.id)}>{this.props.task.title}<button>&times;</button></li>
    );
  }
}
