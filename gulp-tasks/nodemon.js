var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
    var stream = nodemon({
        script: 'server/index.js',
        ext: 'html js',
        ignore: [],
        watch:    ['/server/'],


    })

    stream
        .on('restart', function() {
            console.log('restarted!')
        })
        .on('crash', function() {
            console.error('Application has crashed!\n');
        })
})
