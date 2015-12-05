import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recipe-card-swipe-next', 'Integration | Component | recipe card swipe next', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{recipe-card-swipe-next}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#recipe-card-swipe-next}}
      template block text
    {{/recipe-card-swipe-next}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
