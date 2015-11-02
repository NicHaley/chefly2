import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.findAll('recipe');
	},

	actions: {
		getMoreRecipes() {
			console.log("yolo this was hit");
			Ember.$.get('/get_more_recipes', {})
        .then(function(json) {
        });
		}
	}

});