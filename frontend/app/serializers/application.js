import DS from 'ember-data';

// ActiveModelSerializer translates names from Ember camelCase style to Rails rails_underscore_style
// ie. In this case: todo-items -> todo_items
export default DS.ActiveModelSerializer.extend({});