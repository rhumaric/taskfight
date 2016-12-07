import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';
import _ from 'lodash';


class StagesNavigation extends Component {

  render() {

    const hasFights = !!this.props.fightlist.length;
    const isFightScreen = window.location.pathname.indexOf('/fights') !== -1;
    const fightLinkClasses = [
      'tf-StageNavigationLink',
    ];

    if (isFightScreen) {
      fightLinkClasses.push('tf-StageNavigationLink-active');
    }

    if (!hasFights) {
      fightLinkClasses.push('tf-StageNavigationLink-disabled');
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
