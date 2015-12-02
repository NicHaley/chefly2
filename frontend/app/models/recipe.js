import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cookTime: DS.attr('string'),
  yield: DS.attr('string'),
  servings: DS.attr('string'),
  imageUrls: DS.attr('array'),

  ingredients: DS.hasMany('ingredient'),

});
