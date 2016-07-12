import React, { Component } from 'react';
import {Link} from 'react-router';


export default class StagesNavigation extends Component {

  renderPrevious() {
    if (this.props.previous) {
      return <Link to={this.props.previous}>&lt;</Link>
    } else {
      return <a disabled>&lt;</a>
    }
  }
  renderNext() {
    if(this.props.next) {
      return <Link to={this.props.next}>&gt;</Link>
    } else {
      return <a disabled>&gt;</a>
    }
  }
  render() {
    return (
      <nav>
        {this.renderPrevious()}  

        <p>{this.props.title}</p>

        {this.renderNext()}
      </nav>
    );
  }
}
