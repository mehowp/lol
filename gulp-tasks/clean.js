var gulp = require('gulp'),
	clean = require('gulp-clean')
	gutil = require('gulp-util');

	gulp.task('clean', function(){
    return gulp.src(['!./dist/views/index.html','./dist/views/**/*.html'], {read: false})
        .pipe(clean({force: true}))
        .on('end', function(){
        	gutil.log('App has been cleaned up.');
        })
	})