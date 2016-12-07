import React, { Component } from 'react';
import {Link} from 'react-router';
import _ from 'lodash';


export default class StagesNavigation extends Component {

  renderPrevious() {
    if (this.props.previous) {
      return <Link className="tf-StageNavigationLink" to={this.props.previous}>&lt;</Link>
    } else {
      return <span className="tf-StageNavigationLink tf-StageNavigationLink-disabled">&lt;</span>
    }
  }
  renderNext() {
    if(this.props.next) {
      return <Link className="tf-StageNavigationLink" to={this.props.next}>&gt;</Link>
    } else {
      return <span className="tf-StageNavigationLink tf-StageNavigationLink-disabled">&gt;</span>
    }
  }
  render() {

    const hasFights = !!this.props.fightlist.length;

    return (
      <nav className={"tf-StageNavigation " + this.props.className}>
        <Link className="tf-StageNavigationLink" to="/tasklist">List</Link>
        <Link className="tf-StageNavigationLink" to={hasFights ? '/fight' : null}>Fight</Link>
        <Link className="tf-StageNavigationLink" to={hasFights ? '/fight' : null}>Results</Link>
      </nav>
    );
  }
}
