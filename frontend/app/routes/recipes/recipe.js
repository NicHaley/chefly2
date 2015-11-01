import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		// Makes a GET Request to Rails API Recipes show
		return this.store.find('recipe', params.id);
	}
});
