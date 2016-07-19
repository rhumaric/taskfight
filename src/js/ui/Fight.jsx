import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import find from 'lodash/find';
import Progress from './Progress';

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
      <div className={"tf-FightStage " + this.props.className}>
        <div className="tf-Task tf-FightStage__Task" onClick={this.handleClick.bind(null, task.id)}>{task.title}</div>
        <p className="tf-FightStage__Separator tf-FightSeparator">Or</p>
        <div className="tf-Task tf-FightStage__Task" onClick={this.handleClick.bind(null, otherTask.id)}>{otherTask.title}</div>
        <Progress {...this.props} className="tf-FightStage__Progress"/>
      </div>
    );
  }
}
