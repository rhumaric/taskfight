import React, { Component } from 'react';

export default class TaskListItem extends Component {
  render() {
    return (
      <li className="tf-ListItem tf-TaskListItem">
        {this.props.task.title}
        <button className="tf-Button tf-Button-square tf-Button-transparent tf-RemoveTaskButton" 
                onClick={this.props.removeTask.bind(null, this.props.task.id)}>&times;
        </button>
      </li>
    );
  }
}
