var gulp        = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: "dist/"
      },
      files: ['dist/**/*.*'],
      port: 8080,
      open: true,
      notify: false
    });
});