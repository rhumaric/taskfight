import React, { Component } from 'react';

import Stages from './Stages';

export default class App extends Component {
  render() {
    return (
      <div className="tf">
        <header>
          <h1>Taskfight</h1>
        </header>
        <main>
          <Stages>
          {React.cloneElement(this.props.children, this.props)}
          </Stages>
        </main>
      </div>
    );
  }
}