var gulp = require('gulp');
var install = require("gulp-install");

gulp.task('default', function() {
  // place code for your default task here
  gulp.src('./package.json')
    .pipe(install());
});
