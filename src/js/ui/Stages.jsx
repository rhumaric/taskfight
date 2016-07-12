import React, { Component } from 'react';

import StagesNavigation from './StagesNavigation';
import TaskList from './TaskList';
import Fight from './Fight';
import Results from './Results';

export default class Stages extends Component {



  render() {

    return (

      <div>
        {this.props.children}
        <StagesNavigation title="TaskList" next="/fight"/>
      </div>
    );
  }
}
