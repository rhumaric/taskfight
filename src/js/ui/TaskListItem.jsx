import React, { Component } from 'react';

export default class TaskListItem extends Component {
  render() {
    return (
      <li onClick={this.props.removeTask.bind(null, this.props.task)}>{this.props.task}<button>&times;</button></li>
    );
  }
}
