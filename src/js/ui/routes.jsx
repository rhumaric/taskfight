import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import last from 'lodash/last';
import find from 'lodash/find';

import App from './App';
import TaskList from './TaskList';
import Fight from './Fight';
import Results from './Results';

function validateFightRoute (store, nextState, replace) {
  const state = store.getState();
  const fightId = nextState.params.fightId;

  if (fightId === 'next') {
    console.log('Looking for next fight');
    if (!state.fightlist.length) {
      replace('/tasklist');
      return;
    } else {

      const nextFight = find(state.fightlist, (fight) => {
        return !fight.winner;
      }) || last(state.fightlist); 

      replace(`/fights/${nextFight.id}`);
      return;
    }
  }

  console.log('Looking for fight ', fightId);
  const fight = find(state.fightlist, {id: fightId});
  console.log(state.fightlist);
  if (!fight) {
    console.log('The fight does not exist');
    replace('/tasklist');
    return;
  }
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