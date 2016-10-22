var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-sass'),
  del = require('del'),
  bower = require('gulp-bower');

var _bower = 'bower_components/';
var _scss = 'stylesheets/';
var _lib = 'app/lib/';
var _css = 'app/assets/stylesheets/';

gulp.task('default', ['sass', 'watch'], function () {
  return gutil.log('Gulp is running!');
});

gulp.task('watch', function () {
  gulp.watch('app/**/*.js', ['jshint']);
  gulp.watch(_scss + '**/*.scss', ['sass']);
});

gulp.task('bower:install', function () {
  return bower();
});

// Build configuration for development
gulp.task('build-dev', ['deploy-dev', 'sass'], function () {
  return gutil.log('Libraries copied and Sass transpiled!');
});

// Build configuration for release
gulp.task('build-release', ['deploy-release', 'sass'], function () {
  return gutil.log('Libraries copied and Sass transpiled!');
});

// Linting
gulp.task('jshint', function () {
  return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Sass
gulp.task('sass', function () {
  return gulp.src(_scss + '**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(_css));
});

// Clean deployment folders
gulp.task('clean', function () {
  return del([_css + '*.css',
    _lib + '**',
    '!' + _lib.replace(/\/$/, "")
  ]);
});

// Deploy development libraries
gulp.task('deploy-dev', ['bower:install', 'clean'], function () {
  gulp.src(_bower + 'angular/' + 'angular.js')
    .pipe(gulp.dest(_lib + 'angular/'));

  gulp.src(_bower + 'angular-ui-router/release/' + 'angular-ui-router.js')
    .pipe(gulp.dest(_lib + 'angular-ui-router/'));

  gulp.src(_bower + 'angular-toastr/dist/' + 'angular-toastr.tpls.js')
    .pipe(gulp.dest(_lib + 'angular-toastr/'));
  gulp.src(_bower + 'angular-animate/' + 'angular-animate.js')
    .pipe(gulp.dest(_lib + 'angular-animate/'));

  gulp.src(_bower + 'angular-bootstrap-contextmenu/' + 'contextMenu.js')
    .pipe(gulp.dest(_lib + 'angular-bootstrap-contextmenu/'));

  gulp.src(_bower + 'bootstrap/dist/js/' + 'bootstrap.js')
    .pipe(gulp.dest(_lib + 'bootstrap/'));
  gulp.src(_bower + 'angular-toastr/dist/' + 'angular-toastr.css')
    .pipe(gulp.dest(_css));

  gulp.src(_bower + 'bootstrap/dist/css/' + 'bootstrap.css')
    .pipe(gulp.dest(_css));

  gulp.src(_bower + 'jquery/dist/' + 'jquery.js')
    .pipe(gulp.dest(_lib + 'jquery/'));

  return;
});

// Deploy release libraries
gulp.task('deploy-release', ['bower:install', 'clean'], function () {
  gulp.src(_bower + 'angular/' + 'angular.min.js')
    .pipe(gulp.dest(_lib + 'angular/'));

  gulp.src(_bower + 'angular-toastr/dist/' + 'angular-toastr.tpls.min.js')
    .pipe(gulp.dest(_lib + 'angular-toastr/'));
  gulp.src(_bower + 'angular-animate/' + 'angular-animate.min.js')
    .pipe(gulp.dest(_lib + 'angular-animate/'));

  gulp.src(_bower + 'angular-ui-router/release/' + 'angular-ui-router.min.js')
    .pipe(gulp.dest(_lib + 'angular-ui-router/'));

  gulp.src(_bower + 'angular-bootstrap-contextmenu/' + 'contextMenu.js')
    .pipe(gulp.dest(_lib + 'angular-bootstrap-contextmenu/'));

  gulp.src(_bower + 'bootstrap/dist/js/' + 'bootstrap.min.js')
    .pipe(gulp.dest(_lib + 'bootstrap/'));
  gulp.src(_bower + 'bootstrap/dist/css/' + 'bootstrap.min.css')
    .pipe(gulp.dest(_css));

  gulp.src(_bower + 'angular-toastr/dist/' + 'angular-toastr.min.css')
    .pipe(gulp.dest(_css));

  gulp.src(_bower + 'jquery/dist/' + 'jquery.min.js')
    .pipe(gulp.dest(_lib + 'jquery/'));

  return;
});