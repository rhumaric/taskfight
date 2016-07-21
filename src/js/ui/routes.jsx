import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import last from 'lodash/last';

import App from './App';
import TaskList from './TaskList';
import Fight from './Fight';
import Results from './Results';

function validateFightRoute (store, nextState, replace) {
  const state = store.getState();
  const fightId = nextState.params.fightId;

  if (fightId === 'next') {

    if (!state.fightlist.length) {
      replace('/tasklist');
    } else {

      const nextFight = state.fightlist.find((fight) => {
        return !fight.winner;
      }) || last(state.fightlist); 

      replace(`/fights/${nextFight.id}`);
    }
  }

  // TODO: Validate fight ID too
}

export default function routes (history=browserHistory, app=App, store){
  return (
    <Router history={history}>
      <Redirect from="/" to="/tasklist" />
      <Route component={app}>
        <Route path="taskList" component={TaskList}></Route>
        <Route path="fights/:fightId" component={Fight} onEnter={validateFightRoute.bind(null, store)}></Route>
        <Route path="results" component={Results}></Route>
      </Route>
    </Router>
  );
}