import Ember from 'ember';

export default Ember.Component.extend({

	/**
	* Properties
	*/
	classNames: ["b-recipe-card"],
	b: "b-recipe-card",

	/**
	* Methods
	*/
	click: function () {
		this.toggleProperty("flipped");
	},


	/**
	* Actions
	*/
	actions: {
		/**
		*
		*/
		setModalRecipe(recipeIndex, imageIndex) {
			this.sendAction("setModalRecipe", recipeIndex, imageIndex);
		}
	}
	

});
