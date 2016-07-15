import {createSelector} from 'reselect';
import toPairs from 'lodash/toPairs';

const fightlist = (state) => state.fightlist;

export const progress = createSelector(
  fightlist,
  (fightlist) => {
    return fightlist.reduce((fightsDone, fight) => {
      return fight.winner ? fightsDone + 1 : fightsDone;
    }, 0);

});

export const tally = createSelector(
  fightlist,
  (fightlist) => {
    // Count wins for each task
    return fightlist.reduce((tally, fight) => {

      tally[fight.task] = tally[fight.task] || 0;
      tally[fight.otherTask] =  tally[fight.otherTask] || 0;
      if (fight.winner) { tally[fight.winner] += 2 };

      return tally;
    }, {})
  }
);

export const results = createSelector(
  tally,
  (tally) => {
    var result = toPairs(tally);
    result.sort((a,b) => {
      return b[1] - a[1];
    });

    return result;
  }
);