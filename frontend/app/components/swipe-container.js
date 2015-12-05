import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ["b-swipe-container"],
	b: "b-swipe-container",

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
