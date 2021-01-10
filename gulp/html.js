var gulp            = require('gulp'),
    cnf             = require('../package.json').config,
    plumber         = require('gulp-plumber'),
    fileinclude     = require('gulp-file-include');

gulp.task('html', function () {
  return gulp.src(cnf.src.html)
    .pipe(plumber())
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest(cnf.dist.html));
});
 
gulp.task('html:watch', function () {
  gulp.watch('./src/**/*.html', ['html']);
});