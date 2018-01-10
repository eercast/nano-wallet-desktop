/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { extensions: defaultExtensions } = require('broccoli-asset-rev/lib/default-options');

module.exports = (defaults) => {
  const app = new EmberApp(defaults, {
    fingerprint: {
      extensions: defaultExtensions.concat(['svg', 'webmanifest']),
    },

    'ember-cli-babel': {
      includePolyfill: true,
    },

    'ember-service-worker': {
      versionStrategy: 'every-build',
      registrationStrategy: 'async',
    },

    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapFont: false,
      importBootstrapCSS: false,
    },

    'ember-cli-image-transformer': {
      images: [
        {
          inputFilename: 'public/images/brand-icon.svg',
          outputFileName: 'icon-',
          convertTo: 'png',
          sizes: [32, 192, 310, 512],
        },
      ],
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
