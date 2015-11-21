import Ember from 'ember';

export default Ember.Route.extend({

	// Query Params
	// 
	// queryParams: {
	// 	ingredients: "ingredients"
	// },


	// Properties
	ingredients: null,


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
			this.set("ingredients", query);
			// Update model after setting query
			this.refresh();
		}

	}

});