import React, { Component } from 'react';

import Stages from './Stages';

export default class App extends Component {
  render() {
    return (
      <div className="tf-App">
        <header className="tf-App__Header tf-Header">
          <h1 className="visuallyhidden">Taskfight</h1>
          <svg className="tf-Monogram" viewBox="0 0 145 125" dangerouslySetInnerHTML={{__html:"<use xlink:href='#monogram' />"}}/>
        </header>
        <Stages {...this.props} className="tf-App__Main" >
        {React.cloneElement(this.props.children, this.props)}
        </Stages>
      </div>
    );
  }
}