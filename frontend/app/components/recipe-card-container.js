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
	* Focus element on insert so that keyDown is triggered
	*/
	// didInsertElement() {
	//    this.$().attr('tabindex',0);
	//    this.$().focus();
	// },


	/**
	*
	*/
	keyDown: function (e) {

		if (this.get("gridActive")) {
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






