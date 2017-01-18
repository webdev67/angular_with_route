var gulp = require('gulp');
var install = require("gulp-install");
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/sass/**/*.scss', ['sass']);
});

gulp.task('default',['sass','sass:watch'], function() {
  // place code for your default task here
  gulp.src('./package.json')
    .pipe(install());
});
