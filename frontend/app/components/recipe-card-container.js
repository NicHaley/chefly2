import Ember from 'ember';

export default Ember.Component.extend({


	/**
	* Properties
	*/
	recipes: null,

	currentRecipe: function () {

		return this.get("recipes").get("firstObject");
	}.property("recipes.[]"),


	/**
	* Methods
	*/

	/**
	* Focus element on insert so that keyDown is triggered
	*/
	didInsertElement(){
	   this.$().attr('tabindex',0);
	   this.$().focus();
	},


	/**
	* 
	*/
	keyDown: function (e) {
		if (e.keyCode === 37) {
			console.log("left arrow");
		} else if (e.keyCode === 39) {
			console.log("right arrow");
		}
	}

});
