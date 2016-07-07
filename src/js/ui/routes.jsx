import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';

import App from './App';
import TaskList from './TaskList';
import Fight from './Fight';
import Results from './Results';


export default function routes (history=browserHistory, app=App){
  return (
    <Router history={history}>
      <Redirect from="/" to="/tasklist" />
      <Route component={app}>
        <Route path="taskList" component={TaskList}></Route>
        <Route path="fights/:fightId" component={Fight}></Route>
        <Route path="results" component={Results}></Route>
      </Route>
    </Router>
  );
}