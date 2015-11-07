import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ["recipe-card"],
	flipped: null,


	/**
	* Methods
	*/
	click: function () {
		this.toggleProperty("flipped");
	}

});
