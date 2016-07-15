import {createSelector} from 'reselect';

const fightlist = (state) => state.fightlist;
const tasks = (state) =>state.tasks;



export const progress = createSelector(
  fightlist,
  (fightlist) => {
    return fightlist.reduce((fightsDone, fight) => {
      return fight.winner ? fightsDone + 1 : fightsDone;
    }, 0);

});

export const results = createSelector(
  fightlist,
  tasks,
  (fightlist, tasks) => {
    
});

export default resultsSelector;