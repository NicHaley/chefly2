import Ember from 'ember';

export default Ember.Component.extend({

	/**
	* Properties
	*/
	classNames: ["b-swipe-container"],
	b: "b-swipe-container",

	activeRecipe: null,
	imageIndex: null,


  /**
  *
  */
	lastImage: function () {

		return this.get("activeRecipe.image_urls.length") - 1;

	}.property("activeRecipe.image_urls"),


  /**
  *
  */
  showIngredients: function () {

  	return this.get("imageIndex") === this.get("activeRecipe.image_urls.length")

  }.property("imageIndex", "activeRecipe.image_urls"),


	/**
	* Actions
	*/
	actions: {

    /**
    *
    */
		toggleView () {
			this.sendAction("toggleView");
		},

    /**
    *
    */
    switchRecipe (direction) {
    	this.sendAction("switchRecipe", direction);
    	this.set("imageIndex", 0);
    },


    /**
    *
    */
    cycleImage (direction) {

    	let imageIndex = this.get("imageIndex");

    	if (direction === "up") {
    		this.set("imageIndex", imageIndex - 1)
    	} else if (direction === "down") {
				this.set("imageIndex", imageIndex + 1)
    	}
    }
	}

});
