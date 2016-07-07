import React, { Component } from 'react';

export default class TaskListItem extends Component {
  render() {
    return (
      <li>{this.props.task}</li>
    );
  }
}
