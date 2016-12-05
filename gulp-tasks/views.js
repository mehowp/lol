var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('jade', function(){
  return gulp.src('./src/html/**/*.jade')
  .pipe(jade({
    pretty: true,
    client: false,
    doctype: 'html'
  }))
  .pipe(gulp.dest('./dist/views/'))
  .on('end', function(){
  	gulp.start('templates');
  })
})

gulp.task('bundle:views', ['jade'], function(){

})