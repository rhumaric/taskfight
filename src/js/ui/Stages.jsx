import React, { Component } from 'react';

import StagesNavigation from './StagesNavigation';
import TaskList from './TaskList';
import Fight from './Fight';
import Results from './Results';

export default class Stages extends Component {

  static stages = {
    TaskList: {
      title: 'TaskList',
      next: function (fightlist) {
        return fightlist && fightlist.length && '/fights/next';
      },
      previous: function () {}
    },

    Fight: {
      title: 'Fight',
      next: function () {
        return '/results';
      },
      previous: function () {
        return '/tasklist';
      }
    },

    Results: {
      title: 'Results',
      next: function () {},
      previous: function () {
        return '/fights/next'
      }
    },

    unknown: {
      title: '???',
      next: function () {},
      previous: function () {}
    }
  };

  getStage() {

    var type = this.props.children.type;
    return type === TaskList ? 'TaskList' :
           type === Fight ? 'Fight' :
           type === Results ? 'Results' : 'unknown';
  }

  render() {

    const stage = this.constructor.stages[this.getStage()];

    return (

      <div>
        {this.props.children}
        <StagesNavigation 
          title={stage.title} 
          next={stage.next(this.props.fightlist)} 
          previous={stage.previous(this.props.fightlist)} />
      </div>
    );
  }
}
