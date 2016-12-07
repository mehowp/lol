var gulp = require('gulp');

gulp.task('watch', ['bundle', 'nodemon'], function(){
	gulp.watch(['./src/js/**/*.js', '.!./src/js/templates.js'], ['bundle:js']);
	gulp.watch('./src/html/**/*.jade', ['bundle:views']);
	gulp.watch('./src/assets/styles/**/*.scss', ['bundle:styles']);
})