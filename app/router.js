import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ask-pair');
  this.route('fifteen-minutes');
  this.route('question-form');
  this.route('question', {path: '/question/:question_id'});
  this.route('queue');
});

export default Router;
