'use strict';

define('tellersdesk-front/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/characters-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/characters-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('models/character.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/character.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/characters.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/characters.js should pass ESLint\n\n');
  });
});
define('tellersdesk-front/tests/integration/components/characters-list-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
    'use strict';

    (0, _qunit.module)('Integration | Component | characters-list', function (hooks) {
        (0, _emberQunit.setupRenderingTest)(hooks);

        (0, _qunit.test)('it renders', async function (assert) {
            // Set any properties with this.set('myProperty', 'value');
            // Handle any actions with this.set('myAction', function(val) { ... });

            await (0, _testHelpers.render)(Ember.HTMLBars.template({
                "id": "z8GBY2jZ",
                "block": "{\"symbols\":[],\"statements\":[[1,[21,\"characters-list\"],false]],\"hasEval\":false}",
                "meta": {}
            }));

            assert.equal(this.element.textContent.trim(), '');

            // Template block usage:
            await (0, _testHelpers.render)(Ember.HTMLBars.template({
                "id": "izeLryH0",
                "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"characters-list\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                "meta": {}
            }));

            assert.equal(this.element.textContent.trim(), 'template block text');
        });
    });
});
define('tellersdesk-front/tests/test-helper', ['tellersdesk-front/app', 'tellersdesk-front/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('tellersdesk-front/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/characters-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/characters-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/character-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/character-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/characters-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/characters-test.js should pass ESLint\n\n');
  });
});
define('tellersdesk-front/tests/unit/adapters/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
    'use strict';

    (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
        (0, _emberQunit.setupTest)(hooks);

        // Replace this with your real tests.
        (0, _qunit.test)('it exists', function (assert) {
            let adapter = this.owner.lookup('adapter:application');
            assert.ok(adapter);
        });
    });
});
define('tellersdesk-front/tests/unit/models/character-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
    'use strict';

    (0, _qunit.module)('Unit | Model | character', function (hooks) {
        (0, _emberQunit.setupTest)(hooks);

        // Replace this with your real tests.
        (0, _qunit.test)('it exists', function (assert) {
            let store = this.owner.lookup('service:store');
            let model = store.createRecord('character', {});
            assert.ok(model);
        });
    });
});
define('tellersdesk-front/tests/unit/routes/characters-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
    'use strict';

    (0, _qunit.module)('Unit | Route | characters', function (hooks) {
        (0, _emberQunit.setupTest)(hooks);

        (0, _qunit.test)('it exists', function (assert) {
            let route = this.owner.lookup('route:characters');
            assert.ok(route);
        });
    });
});
define('tellersdesk-front/config/environment', [], function() {
  var prefix = 'tellersdesk-front';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('tellersdesk-front/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
