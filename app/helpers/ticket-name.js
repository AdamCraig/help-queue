import Ember from 'ember';

export function ticketName(params) {
  var question = params[0];

  return Ember.String.htmlSafe(question.get('name'));
}

export default Ember.Helper.helper(ticketName);
