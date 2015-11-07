import Ember from 'ember';

export default Ember.Component.extend({


	/**
	* Properties
	*/
	recipes: null,

	currentRecipe: function () {

		return this.get("recipes").get("firstObject");
	}.property("recipes.[]")


	/**
	* Methods
	*/



});
