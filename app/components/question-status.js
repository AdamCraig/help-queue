import Ember from 'ember';

export default Ember.Component.extend({
  isQuestionAnswered: false,

  actions: {
    questionAnswered: function() {
      this.set('isQuestionAnswered', true);
    }
  }
  
});
