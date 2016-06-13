import Ember from 'ember';
import moment from 'moment';

export function waitingTime(params) {
  var originalTime = params[0].get('time');
  var currentTime = moment().unix();

  var waitingTime = (currentTime - originalTime) / 60;

  return waitingTime.toPrecision(3) + "m";
}

export default Ember.Helper.helper(waitingTime);
