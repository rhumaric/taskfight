import React, { Component } from 'react';

import StagesNavigation from './StagesNavigation';


export default class Stages extends Component {

  render() {

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        className: (child.className || "") + ' tf-Stages__Stage'
      });
    });
    return (

      <main className={"tf-Stages " + this.props.className}>
        {children}
        <StagesNavigation
          className="tf-Stages__Menu"
          fightlist={this.props.fightlist} />
      </main>
    );
  }
}
