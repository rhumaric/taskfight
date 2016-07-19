import React, { Component } from 'react';

export default class TaskListItem extends Component {
  render() {
    return (
      <li className="tf-ListItem tf-TaskListItem">
        <span className="tf-TaskListItem__Text">{this.props.task.title}</span>
        <button className="tf-TaskListItem__Button tf-Button tf-Button-square tf-Button-transparent" 
                onClick={this.props.removeTask.bind(null, this.props.task.id)}>&times;
        </button>
      </li>
    );
  }
}
