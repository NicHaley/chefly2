import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ["b-search-filters"],
	b: "b-search-filters",

	/**
	* 
	*/
	ingredientQueryText: null,
  ingredients: [],

	/**
	*
	*/
	actions: {

    /**
     *
     */
		addIngredient (ingredientQueryText) {
      let ingredients = this.get("ingredients");

      ingredients.pushObject(ingredientQueryText);
			this.sendAction("ingredientQuery", ingredients);
			this.set("ingredientQueryText","");
		},


    /**
     *
     */
    removeIngredient (ingredient) {
      let ingredients = this.get("ingredients");

      ingredients.removeObject(ingredient);
			this.sendAction("ingredientQuery", ingredients);
    }
	}

});