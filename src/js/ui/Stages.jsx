import React, { Component } from 'react';

import StagesNavigation from './StagesNavigation';

export default class Stages extends Component {
  render() {
    return (

      <div>
        {this.props.children}
        <StagesNavigation />
      </div>
    );
  }
}
