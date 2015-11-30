import Ember from 'ember';

export default Ember.Component.extend({

	/**
	* Properties
	*/
	classNames: ["b-recipe-card"],
	b: "b-recipe-card",
	
	classNameBindings: ["gridActive:m-grid"],
	flipped: null,
	gridActive: null,


	/**
	* Methods
	*/
	click: function () {
		this.toggleProperty("flipped");
	}

});
