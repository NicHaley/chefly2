import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ["recipe-card-container"],

	/**
	* Properties
	*/
	recipes: null,
	currentRecipe: 0,


	/**
	* Methods
	*/
	incrementIndex: function () {
		let currentRecipe = this.get("currentRecipe"),
				recipesIndex = this.get("recipes.length") - 1;

		if (currentRecipe !== recipesIndex) {
			this.set("currentRecipe", currentRecipe + 1);
		} else {
			this.set("currentRecipe", 0);
		}
	},

	decrementIndex: function () {
		let currentRecipe = this.get("currentRecipe"),
				recipesIndex = this.get("recipes.length") - 1;

		if (currentRecipe !== 0) {
			this.set("currentRecipe", currentRecipe - 1);
		} else {
			this.set("currentRecipe", recipesIndex);
		}
	},


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
			this.decrementIndex();
		} else if (e.keyCode === 39) {
			this.incrementIndex();
		}
	}

});
