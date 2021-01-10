var gulp            = require('gulp'),
    sourcemaps      = require('gulp-sourcemaps'),
    cnf             = require('../package.json').config,
    plumber         = require('gulp-plumber'),
    babel           = require('gulp-babel'),
    uglify          = require('gulp-uglify'),
    include         = require('gulp-include');

gulp.task('js', function () {
  return gulp.src(cnf.src.js)
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel())
    .pipe(include({
        extensions: 'js',
        hardFail: true,
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cnf.dist.js));
});
 
gulp.task('js:watch', function () {
  gulp.watch([cnf.src.js, './src/js/components/**/*.js'], ['js']);
});