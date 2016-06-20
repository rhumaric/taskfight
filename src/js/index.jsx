import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Brilliant</p>;
  }
}

render(<App/>, document.body);