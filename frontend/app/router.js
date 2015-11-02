import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recipes', { path: '/' }, function() {
    this.route('recipe', {path: 'recipes/:id'});
  });
  this.route('blogs', function() {
    this.route('blog', {path: 'blogs/:id'});
  });
});

export default Router;
