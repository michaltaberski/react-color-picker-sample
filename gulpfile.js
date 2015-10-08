var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');

gulp.task('default', function () {
  return gulp.src('src/app.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', function() {
  gulp.watch(['src/**/*.js'], ['default']);
});
