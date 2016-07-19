import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import find from 'lodash/find';

export default class Fight extends Component {

  @autobind
  handleClick (task, event) {
    event.preventDefault();
    this.props.setWinner(this.props.params.fightId, task).then(() => {
      var nextFight = find(this.props.fightlist, (fight) => {
        return !fight.winner;
      });
      if (nextFight) {
        this.props.history.push('/fights/' + nextFight.id);
      } else {
        this.props.history.push('/results');
      }
    });
  }

  render() {

    var fight = find(this.props.fightlist, {id:this.props.params.fightId});
    console.log(fight);
    var task = this.props.tasks[fight.task];
    var otherTask = this.props.tasks[fight.otherTask];

    return (
      <div className={this.props.className}>
      <button onClick={this.handleClick.bind(null, task.id)}>{task.title}</button>
      <p>Or</p>
      <button onClick={this.handleClick.bind(null, otherTask.id)}>{otherTask.title}</button>
      </div>
    );
  }
}
