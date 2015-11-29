import Ember from 'ember';

export default Ember.Component.extend({

	/**
	* Properties
	*/
	classNames: ["b-recipe-card"],
	b: "b-recipe-card",
	
	classNameBindings: ["scrollActive:m-scroll"],
	flipped: null,
	scrollActive: null,


	/**
	* Methods
	*/
	click: function () {
		this.toggleProperty("flipped");
	}

});
