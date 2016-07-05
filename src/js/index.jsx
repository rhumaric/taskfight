import React from 'react';
import {render} from 'react-dom';
import autobind from 'autobind-decorator';

class HelloWord extends React.Component {
  render() {
    return (
      <div>Hello, {this.props.getName()}</div>
    );
  }
}

@autobind
class App extends React.Component {

  name="Romaric";

  getName () {
    return this.name;
  }

  render () {
    return <HelloWord getName={this.getName}/>
  }
}

render(<App/>, document.body);