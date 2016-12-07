import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';
import _ from 'lodash';


class StagesNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasFights: !!props.fightlist.length,
      justGotFights: false
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      hasFights: !!props.fightlist.length,
      justGotFights: !this.state.hasFights && !!props.fightlist.length,
    });
  }

  render() {

    const isFightScreen = window.location.pathname.indexOf('/fights') !== -1;
    const {hasFights, justGotFights} = this.state;
    const fightLinkClasses = [
      'tf-StageNavigationLink',
    ];

    if (isFightScreen) {
      fightLinkClasses.push('tf-StageNavigationLink-active');
    }

    if (!hasFights) {
      fightLinkClasses.push('tf-StageNavigationLink-disabled');
    }

    if (justGotFights) {
      fightLinkClasses.push('tf-StageNavigationLink-highlight');
    }

    const resultsLinkClasses = [
      'tf-StageNavigationLink',
    ];

    if (!hasFights) {
      resultsLinkClasses.push('tf-StageNavigationLink-disabled');
    }

    return (
      <nav className={"tf-StageNavigation " + this.props.className}>
        <Link className="tf-StageNavigationLink" to="/tasklist" activeClassName="tf-StageNavigationLink-active">List</Link>
        <Link className={fightLinkClasses.join(' ')} to={hasFights ? '/fights/next' : null}>Fight</Link>
        <Link className={resultsLinkClasses.join(' ')} to={hasFights ? '/results' : null} activeClassName="tf-StageNavigationLink-active">Results</Link>
      </nav>
    );
  }
}

export default StagesNavigation;
