import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ["recipe-card"],
	classNameBindings: ["isActive:m-active"],

	/**
	* Properties
	*/
	recipe: null,
	currentRecipe: null,

	isActive: function () {

		let recipeId = this.get("recipe.id"),
				currentRecipeId = this.get("currentRecipe.id");

		if (recipeId === currentRecipeId) {
			return true;
		} else {
			return false;
		}

	}.property("recipe", "currentRecipe")
	

});
