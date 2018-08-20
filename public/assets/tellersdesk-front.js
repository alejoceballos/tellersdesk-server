"use strict";



;define('tellersdesk-front/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.RESTAdapter.extend({
        namespace: 'api'
    });
});
;define('tellersdesk-front/app', ['exports', 'tellersdesk-front/resolver', 'ember-load-initializers', 'tellersdesk-front/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const App = Ember.Application.extend({
        modulePrefix: _environment.default.modulePrefix,
        podModulePrefix: _environment.default.podModulePrefix,
        Resolver: _resolver.default
    });

    (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

    exports.default = App;
});
;define('tellersdesk-front/components/characters-list/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define("tellersdesk-front/components/characters-list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rVDpmnws", "block": "{\"symbols\":[\"item\"],\"statements\":[[7,\"table\"],[9],[0,\"\\n    \"],[7,\"thead\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"Name\"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"Strength\"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"Dexterity\"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"Stamina\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"data\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n            \"],[7,\"td\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n            \"],[7,\"td\"],[9],[1,[22,1,[\"strength\"]],false],[10],[0,\"\\n            \"],[7,\"td\"],[9],[1,[22,1,[\"dexterity\"]],false],[10],[0,\"\\n            \"],[7,\"td\"],[9],[1,[22,1,[\"stamina\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/characters-list/template.hbs" } });
});
;define('tellersdesk-front/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('tellersdesk-front/helpers/app-version', ['exports', 'tellersdesk-front/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('tellersdesk-front/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('tellersdesk-front/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('tellersdesk-front/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tellersdesk-front/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('tellersdesk-front/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('tellersdesk-front/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('tellersdesk-front/initializers/export-application-global', ['exports', 'tellersdesk-front/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("tellersdesk-front/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('tellersdesk-front/models/character', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({

        name: _emberData.default.attr('string'),
        strength: _emberData.default.attr('number', { defaultValue: 1 }),
        dexterity: _emberData.default.attr('number', { defaultValue: 1 }),
        stamina: _emberData.default.attr('number', { defaultValue: 1 })

    });
});
;define('tellersdesk-front/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('tellersdesk-front/router', ['exports', 'tellersdesk-front/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const Router = Ember.Router.extend({
        location: _environment.default.locationType,
        rootURL: _environment.default.rootURL
    });

    Router.map(function () {
        this.route('characters');
        this.route('stories');
    });

    exports.default = Router;
});
;define('tellersdesk-front/routes/characters', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model() {
            return this.store.findAll('character');
        }
    });
});
;define('tellersdesk-front/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("tellersdesk-front/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XlLYfMIf", "block": "{\"symbols\":[],\"statements\":[[0,\"Hello\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/application.hbs" } });
});
;define("tellersdesk-front/templates/characters", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8tBKBbeh", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"characters-list\",null,[[\"data\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/characters.hbs" } });
});
;

;define('tellersdesk-front/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("tellersdesk-front/app")["default"].create({"name":"tellersdesk-front","version":"0.0.0+a2ec444f"});
          }
        
//# sourceMappingURL=tellersdesk-front.map
