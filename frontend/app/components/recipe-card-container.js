import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ["b-recipe-card-container"],
	b: "b-recipe-card-container",


	/**
	* Properties
	*/
	recipes: null,
	currentRecipe: 0,
	recipesLength: Ember.computed.reads("recipes.length"),
	flipped: false,
	swipeActive: false,
	recipeIndex: 0,
	imageIndex: 0,

	/**
	*
	*/
	activeRecipe: function () {

		return this.get("recipes").objectAt(this.get("recipeIndex"));

	}.property("recipeIndex"),


	/**
	*
	*/
	nextRecipe: function () {

		let nextIndex = this.nextIndex(this.get("recipeIndex"), this.get("recipesLength"));

		return this.get("recipes").objectAt(nextIndex);

	}.property("recipeIndex", "recipesLength"),


	/**
	*
	*/
	previousRecipe: function () {

		let previousIndex = this.previousIndex(this.get("recipeIndex"), this.get("recipesLength"));

		return this.get("recipes").objectAt(previousIndex);

	}.property("recipeIndex", "recipesLength"),


	/**
	*
	*/
	nextIndex: function (currentIndex, length) {

		if (currentIndex !== length - 1) {
			return currentIndex + 1;
		} else {
			return 0;
		}
	},
	

  /**
  *
  */
  previousIndex: function (currentIndex, length) {

  	if (currentIndex !== 0) {
  		return currentIndex - 1;
  	} else {
  		return length - 1;
  	}

  },


	/**
	* Actions
	*/
	actions: {

    /**
    *
    */
		toggleView () {
			this.toggleProperty("swipeActive");
		},


    /**
    *
    */
    setModalRecipe (recipeIndex, imageIndex) {

    	this.setProperties({
    		recipeIndex: recipeIndex,
    		imageIndex: imageIndex
    	});

    	this.toggleProperty("swipeActive");

    },


    /**
    *
    */
    switchRecipe (direction) {

			let currentIndex = this.get("recipeIndex"),
					length 			 = this.get("recipesLength");

    	if (direction === "previous") {

    		this.set("recipeIndex", this.previousIndex(currentIndex, length))

    	} else if (direction === "next") {

    		this.set("recipeIndex", this.nextIndex(currentIndex, length))

    	}
    }
	}

});






