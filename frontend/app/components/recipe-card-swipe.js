import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ["b-recipe-card-swipe"],
	b: "b-recipe-card-swipe",

	/**
	* Actions
	*/
	actions: {

    /**
     *
     */
		toggleView () {
			this.sendAction("toggleView");
		}
	}

});
