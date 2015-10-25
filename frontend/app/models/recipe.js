import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  cookTime: DS.attr('string'),
  yield: DS.attr('string'),
  servings: DS.attr('string'),
  ingredientLines: DS.attr('string')
});
