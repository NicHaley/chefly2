import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ["recipe-card-container"],
	classNameBindings: ["scrollActive:m-scroll"],

	/**
	* Properties
	*/
	recipes: null,
	currentRecipe: 0,
	recipesLength: Em.computed.reads("recipes.length"),
	flipped: false,
	scrollActive: null,

	/**
	* Methods
	*/
	incrementIndex: function () {
		let currentRecipe = this.get("currentRecipe"),
				lastRecipe = this.get("recipesLength") - 1;

		if (currentRecipe !== lastRecipe) {
			this.set("currentRecipe", currentRecipe + 1);
		} else {
			this.set("currentRecipe", 0);
		}
	},

	decrementIndex: function () {
		let currentRecipe = this.get("currentRecipe"),
				lastRecipe = this.get("recipesLength") - 1;

		if (currentRecipe !== 0) {
			this.set("currentRecipe", currentRecipe - 1);
		} else {
			this.set("currentRecipe", lastRecipe);
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

		if (this.get("scrollActive")) {
			return;
		}

		// Navigate down recipe stack
		if (e.keyCode === 40) {
			this.decrementIndex();
			this.set("flipped", false);		

		// See more card info
		} else if (e.keyCode === 39 || e.keyCode === 37) {
			this.toggleProperty("flipped");

		// Navigate up recipe stack
		} else if (e.keyCode === 38) {
			this.incrementIndex();
			this.set("flipped", false);
		}
	},


	/**
	* 
	*/
	actions: {
		toggleView () {
			this.toggleProperty("scrollActive");
		},

		ingredientQuery (query) {
			this.sendAction("ingredientQuery", query);
			// this.transitionTo({ queryParams: { ingredients: query }});
		}
	}

});






