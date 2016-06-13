import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion1() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        content: this.get('content'),
      };
      this.sendAction('saveQuestion1', params);
    }
  }
});
