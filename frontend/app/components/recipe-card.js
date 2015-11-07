import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ["recipe-card"],
	classNameBindings: ["isActive:m-active"],

	/**
	* Properties
	*/
	recipe: null,
	currentRecipe: null,
	index: null,

	isActive: function () {

		let currentRecipe = this.get("currentRecipe"),
				index = this.get("index");

		if (index === currentRecipe) {
			return true;
		} else {
			return false;
		}

	}.property("currentRecipe")
	

});
