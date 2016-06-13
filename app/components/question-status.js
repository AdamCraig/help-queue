import Ember from 'ember';

export default Ember.Component.extend({
  isQuestionAnswered: false,

  actions: {
    deleteQuestion1(question) {
    this.set('isQuestionAnswered', true);
    this.sendAction('deleteQuestion2', question);
    },
  }

});
