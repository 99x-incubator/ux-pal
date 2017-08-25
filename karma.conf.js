//jshint strict: false
module.exports = function (config) {
  config.set({

    basePath: './app',

    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      'components/app.config.js',
      'components/**/*.module.js',
      'components/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],


       customLaunchers: {
      'PhantomJS_flags': {
        base: 'PhantomJS',
        flags: ['--load-images=false']
      }
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};


