var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('library', function () {
  return gulp.src('./lib/**/*.js')
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('watch', ['build'], function () {
  gulp.watch('./public/**.*', connect.reload().write);
  gulp.watch('./lib/**/*.js', ['library']);
});

gulp.task('server', ['build'], function () {
  connect.server({
    port: 9000,
    root: [
      './public',
      './build',
      './bower_components'
    ],
    livereload: true
  });
});

gulp.task('build', ['library']);
gulp.task('default', ['build', 'server', 'watch']);
