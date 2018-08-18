'use strict';

define('tellersdesk-front/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
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

  QUnit.test('routes/stories.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/stories.js should pass ESLint\n\n');
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

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/characters-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/characters-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/stories-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/stories-test.js should pass ESLint\n\n');
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
define('tellersdesk-front/tests/unit/routes/stories-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
    'use strict';

    (0, _qunit.module)('Unit | Route | stories', function (hooks) {
        (0, _emberQunit.setupTest)(hooks);

        (0, _qunit.test)('it exists', function (assert) {
            let route = this.owner.lookup('route:stories');
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
