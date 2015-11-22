import Ember from 'ember';

export default Ember.Route.extend({

	// Properties
	ingredients: [],


	// Model
	model(params) {
		// Query backend for recipe with specified ingredient, then return (display) recipes
		return this.store.query("recipe", {query: this.get("ingredients")}).then( recipe => {
			return recipe;
		});
	},


	// Actions
	actions: {

		ingredientQuery (query) {
			this.get("ingredients").pushObject(query);
			// Update model after setting query
			this.refresh();
		}

	}

});