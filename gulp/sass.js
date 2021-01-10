var gulp            = require('gulp'),
    sourcemaps      = require('gulp-sourcemaps'),
    cnf             = require('../package.json').config,
    plumber         = require('gulp-plumber'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    cssnano         = require('gulp-cssnano'),
    rename          = require("gulp-rename");

gulp.task('sass', function () {
  return gulp.src(cnf.src.sass)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename({
        dirname: "",
        basename: "main",
        prefix: "",
        suffix: ".min",
        extname: ".css"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cnf.dist.css));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});