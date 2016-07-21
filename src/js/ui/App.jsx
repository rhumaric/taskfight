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
      hideMenu: false
    }
  }

  toggleMenu() {
    this.setState({
      hideMenu: !this.state.hideMenu
    });
  }

  confirmNewFight() {
    if (confirm(messages.NEW_FIGHT_CONFIRM)){
      this.props.newFight();
    }
  }

  render() {
    return (
      <div className="tf-App">
        <header className={classnames("tf-App__Header tf-Header", {'tf-Header-noMenu': this.state.hideMenu})}>
          <div className="tf-TitleBar clearfix">
            <h1 className="visuallyhidden">Taskfight</h1>
            <svg className="tf-Monogram" viewBox="0 0 145 125" dangerouslySetInnerHTML={{__html:"<use xlink:href='#monogram' />"}}/>
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