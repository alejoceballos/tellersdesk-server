'use strict';



;define('tellersdesk-front/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
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
;define('tellersdesk-front/components/characters/character-list/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        tagName: 'table',

        characters: Ember.A(),

        onItemView: null,

        onItemUpdate: null,

        actions: {
            itemView(character) {
                this.onItemView(character);
            },

            itemUpdate(character) {
                this.onItemUpdate(character);
            }
        }

    });
});
;define('tellersdesk-front/components/characters/character-list/list-item/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        tagName: 'tr',

        character: null,

        onView: null,

        onUpdate: null,

        actions: {
            view(character) {
                this.onView(character);
            },

            update(character) {
                this.onUpdate(character);
            }
        }
    });
});
;define("tellersdesk-front/components/characters/character-list/list-item/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NAj0gQq0", "block": "{\"symbols\":[],\"statements\":[[7,\"td\"],[9],[1,[23,[\"character\",\"name\"]],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[1,[23,[\"character\",\"strength\"]],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[1,[23,[\"character\",\"dexterity\"]],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[1,[23,[\"character\",\"stamina\"]],false],[10],[0,\"\\n\"],[7,\"td\"],[9],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"view\",[23,[\"character\"]]]],[9],[0,\"View\"],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"update\",[23,[\"character\"]]]],[9],[0,\"Update\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/characters/character-list/list-item/template.hbs" } });
});
;define("tellersdesk-front/components/characters/character-list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YXjwInl2", "block": "{\"symbols\":[\"character\"],\"statements\":[[7,\"thead\"],[9],[0,\"\\n\"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"th\"],[9],[0,\"Name\"],[10],[0,\"\\n    \"],[7,\"th\"],[9],[0,\"Strength\"],[10],[0,\"\\n    \"],[7,\"th\"],[9],[0,\"Dexterity\"],[10],[0,\"\\n    \"],[7,\"th\"],[9],[0,\"Stamina\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"characters\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"characters/character-list/list-item\",null,[[\"character\",\"onView\",\"onUpdate\"],[[22,1,[]],[27,\"action\",[[22,0,[]],\"itemView\"],null],[27,\"action\",[[22,0,[]],\"itemUpdate\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/characters/character-list/template.hbs" } });
});
;define('tellersdesk-front/components/characters/characters-edit/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        /**
         * @property
         * @public
         */
        character: null,

        /**
         * @property
         * @public
         */
        attributesMaxValues: null,

        /**
         * @property
         * @public
         */
        onSave: null,

        /**
         * @property
         * @public
         */
        onCancel: null,

        /**
         * @inheritDoc
         */
        init() {
            this._super(...arguments);

            if (!this.get('character')) {
                throw new Error('A character model must be provided');
            }

            if (!this.get('attributesMaxValues')) {
                this.set('attributesMaxValues', [7, 5, 3]);
            }
        },

        validate() {
            if (this.get('character.isNew')) {
                this.validateNew();
            } else {
                this.validateExisting();
            }
        },

        validateNew() {
            const maxAllowed = this.get('attributesMaxValues').reduce((acc, val) => acc + val);

            if (this.get('character.attributesTotal') < maxAllowed) {
                throw new Error('Not all attribute points were used');
            }

            if (this.get('character.attributesTotal') > maxAllowed) {
                throw new Error('Maximum number of allowed attribute points were reached');
            }

            const attrMaxVals = this.get('attributesMaxValues').map(val => val);

            const strengthMaxIdx = attrMaxVals.indexOf(parseInt(this.get('character.strength')));
            if (strengthMaxIdx < 0) {
                throw new Error('Strength points not distributed accordingly');
            }
            delete attrMaxVals[strengthMaxIdx];

            const dexterityMaxIdx = attrMaxVals.indexOf(parseInt(this.get('character.dexterity')));
            if (dexterityMaxIdx < 0) {
                throw new Error('Dexterity points not distributed accordingly');
            }
            delete attrMaxVals[dexterityMaxIdx];

            const staminaMaxIdx = attrMaxVals.indexOf(parseInt(this.get('character.stamina')));
            if (staminaMaxIdx < 0) {
                throw new Error('Stamina points not distributed accordingly');
            }
        },

        validateExisting() {},

        actions: {
            save(character) {
                this.validate();
                this.onSave(character);
            },

            cancel() {
                this.onCancel('cancelAction', this.get('character'));
            }
        }
    });
});
;define("tellersdesk-front/components/characters/characters-edit/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7Gs3crxQ", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"Name:\"],[10],[1,[27,\"input\",null,[[\"value\"],[[23,[\"character\",\"name\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"Strength:\"],[10],[1,[27,\"input\",null,[[\"value\"],[[23,[\"character\",\"strength\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"Dexterity:\"],[10],[1,[27,\"input\",null,[[\"value\"],[[23,[\"character\",\"dexterity\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"label\"],[9],[0,\"Stamina:\"],[10],[1,[27,\"input\",null,[[\"value\"],[[23,[\"character\",\"stamina\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"save\",[23,[\"character\"]]]],[9],[0,\"Save\"],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"cancel\",[23,[\"character\"]]]],[9],[0,\"Cancel\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/components/characters/characters-edit/template.hbs" } });
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
;define('tellersdesk-front/controllers/characters/create', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            save(character) {
                character.save();
            },

            cancel(character) {
                character.deleteRecord();
            }
        }
    });
});
;define('tellersdesk-front/controllers/characters/list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        actions: {
            goToView(character) {
                this.transitionToRoute('characters.view', character.id);
            },

            goToUpdate(character) {
                this.transitionToRoute('characters.update', character.id);
            }
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
        stamina: _emberData.default.attr('number', { defaultValue: 1 }),

        attributesTotal: Ember.computed('strength', 'dexterity', 'stamina', function () {
            return parseInt(this.get('strength')) + parseInt(this.get('dexterity')) + parseInt(this.get('stamina'));
        })
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
        this.route('characters', function () {
            this.route('create');
            this.route('update');
            this.route('list');
        });
        this.route('stories');
        this.route('dashboards');
    });

    exports.default = Router;
});
;define('tellersdesk-front/routes/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel() {
            // console.log('APPLICATION!!!');
        }
    });
});
;define('tellersdesk-front/routes/characters', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel() {
            // console.log('CHARACTERS!!!');
        }
    });
});
;define('tellersdesk-front/routes/characters/create', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel() {
            // console.log('CHARACTERS/CREATE!!!');
        },

        model() {
            return this.store.createRecord('character');
        }
    });
});
;define('tellersdesk-front/routes/characters/list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel() {
            // console.log('CHARACTERS/LIST!!!');
        },

        model() {
            return this.store.findAll('character');
        }
    });
});
;define('tellersdesk-front/routes/characters/update', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        model(id) {
            return this.store.findRecord('post', id);
        }

    });
});
;define('tellersdesk-front/routes/dashboards', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel() {
            // console.log('DASHBOARD!!!');
        }
    });
});
;define('tellersdesk-front/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel() {
            // console.log('INDEX!!!');
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
  exports.default = Ember.HTMLBars.template({ "id": "SCGLLT9x", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Application\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/application.hbs" } });
});
;define("tellersdesk-front/templates/characters", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9ciBYx9+", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Characters\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/characters.hbs" } });
});
;define("tellersdesk-front/templates/characters/create", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hngdjWTp", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Create\"],[10],[0,\"\\n\"],[1,[27,\"characters/characters-edit\",null,[[\"character\",\"onSave\",\"onCancel\"],[[23,[\"model\"]],[27,\"action\",[[22,0,[]],\"save\"],null],[27,\"action\",[[22,0,[]],\"cancel\"],null]]]],false],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/characters/create.hbs" } });
});
;define("tellersdesk-front/templates/characters/list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cQOvetPr", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"List\"],[10],[0,\"\\n\"],[1,[27,\"characters/character-list\",null,[[\"characters\",\"onItemView\",\"onItemUpdate\"],[[23,[\"model\"]],[27,\"action\",[[22,0,[]],\"goToView\"],null],[27,\"action\",[[22,0,[]],\"goToUpdate\"],null]]]],false],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/characters/list.hbs" } });
});
;define("tellersdesk-front/templates/characters/update", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JzYRLqAx", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Update\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/characters/update.hbs" } });
});
;define("tellersdesk-front/templates/dashboards", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "grOc6j0T", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Dashboard\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "tellersdesk-front/templates/dashboards.hbs" } });
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
            require("tellersdesk-front/app")["default"].create({"name":"tellersdesk-front","version":"0.0.0+25e1a1e2"});
          }
        
//# sourceMappingURL=tellersdesk-front.map
