import React, { Component } from 'react';
import {Link} from 'react-router';


export default class StagesNavigation extends Component {

  render() {
    return (
      <nav>
        <Link to="tasklist">List</Link>
        <Link to="fight">Fight</Link>
        <Link to="results">Results</Link>
      </nav>
    );
  }
}
