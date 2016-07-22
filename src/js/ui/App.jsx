import React, { Component } from 'react';
import classnames from 'classnames';
import autobind from 'autobind-decorator';

import messages from './messages';
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

  hideMenu() {
    this.setState({
      hideMenu: true
    })
  }

  confirmNewFight() {
    if (confirm(messages.NEW_FIGHT_CONFIRM)){
      this.props.newFight();
      this.hideMenu();
      this.props.history.push('/tasklist');
    }
  }

  render() {
    return (
      <div className="tf-App">
        <header className={classnames("tf-App__Header tf-Header", {'tf-Header-noMenu': this.state.hideMenu})}>
          <div className="tf-TitleBar clearfix">
            <h1 className="tf-Logo">
              <span className="visuallyhidden">Taskfight</span>
            </h1>
            <button className="tf-TitleBar__MenuToggle tf-Button tf-MenuToggle" onClick={this.toggleMenu}>Menu</button>
          </div>
          <nav className="tf-Menu tf-Header__Menu">
            <button className="tf-Button tf-Button-blended tf-MenuItem" onClick={this.confirmNewFight}>New fight</button>
          </nav>
        </header>
        <Stages {...this.props} className="tf-App__Main" >
        {React.cloneElement(this.props.children, this.props)}
        </Stages>
      </div>
    );
  }
}