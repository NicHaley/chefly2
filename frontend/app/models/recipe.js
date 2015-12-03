import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cook_time: DS.attr('string'), // TODO: Get serializer to handle snakecase to camelcase coversion
  yield: DS.attr('string'),
  servings: DS.attr('string'),
  image_urls: DS.attr(),	// TODO: Get serializer to handle snakecase to camelcase coversion

  ingredients: DS.hasMany('ingredient'),

});
