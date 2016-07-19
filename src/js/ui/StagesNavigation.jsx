import React, { Component } from 'react';
import {Link} from 'react-router';


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
    return (
      <nav className={"tf-StageNavigation " + this.props.className}>
        {this.renderPrevious()}  

        <p>{this.props.title}</p>

        {this.renderNext()}
      </nav>
    );
  }
}
