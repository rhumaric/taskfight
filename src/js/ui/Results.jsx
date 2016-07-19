import React, { Component } from 'react';
import autobind from 'autobind-decorator';

export default class Results extends Component {

  @autobind
  renderResult(result) {

    var task = this.props.tasks[result[0]];
    return (
      <li className="tf-ListItem tf-ResultStage__Task" key={task.id}>{task.title}</li>
    )
  }

  render() {
    return (
      <ol className={"tf-ResultStage tf-CenteredColumn" + this.props.className}>
        {this.props.results.map(this.renderResult)}
      </ol>
    );
  }
}