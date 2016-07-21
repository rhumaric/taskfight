import React, { Component } from 'react';
import classnames from 'classnames';
import autobind from 'autobind-decorator';

import Stages from './Stages';

@autobind
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      hideMenu: true
    }
  }

  toggleMenu() {
    this.setState({
      hideMenu: !this.state.hideMenu
    });
  }

  render() {
    return (
      <div className="tf-App">
        <header className={classnames("tf-App__Header tf-Header", {'tf-Header-noMenu': this.state.hideMenu})}>
          <h1 className="visuallyhidden">Taskfight</h1>
          <svg className="tf-Monogram" viewBox="0 0 145 125" dangerouslySetInnerHTML={{__html:"<use xlink:href='#monogram' />"}}/>
          <button className="tf-MenuToggle" onClick={this.toggleMenu}>Menu</button>
          <nav className="tf-Menu tf-Header__Menu">
            <button className="tf-MenuItem">New fight</button>
          </nav>
        </header>
        <Stages {...this.props} className="tf-App__Main" >
        {React.cloneElement(this.props.children, this.props)}
        </Stages>
      </div>
    );
  }
}