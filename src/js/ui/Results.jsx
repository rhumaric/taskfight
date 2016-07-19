import React, { Component } from 'react';
import autobind from 'autobind-decorator';

export default class Results extends Component {

  @autobind
  renderResult(result) {

    var task = this.props.tasks[result[0]];
    return (
      <li key={task.id}>{task.title}</li>
    )
  }

  render() {
    return (
      <ol className={this.props.className}>
        {this.props.results.map(this.renderResult)}
      </ol>
    );
  }
}