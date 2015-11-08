import Ember from 'ember';

export default Ember.Component.extend({

	/**
	* Properties
	*/
	classNames: ["recipe-card"],
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
