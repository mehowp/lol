var gulp = require('gulp'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    rollup = require('gulp-rollup'),
    cleanup = require('rollup-plugin-cleanup'),
    babel = require('rollup-plugin-babel'),
    resolve = require('rollup-plugin-node-resolve'),
    eslint = require('gulp-eslint'),
    commonjs = require('rollup-plugin-commonjs'),
    json = require('rollup-plugin-json'),
    uglify = require('rollup-plugin-commonjs'),
    sourcemaps = require('gulp-sourcemaps'),
    templateCache = require('gulp-angular-templatecache');

gulp.task('eslint', function(){
    return gulp.src(['./src/js/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('bundle:js', ['eslint'], function() {
    return gulp.src(['./src/js/**/*.js', '!./src/js/templates.js'])
        .pipe(rollup({
            moduleName: 'app',
            entry: './src/js/main.js',
            allowRealFiles: true,
            format: 'iife',
            sourceMap: false,
            plugins: [
                json(),
               //cleanup({sourceType: "module"}),
                resolve({
                    jsnext: true,
                   main: true,
                    browser: true,
                    extensions: [ '.js', '.json' ],  // Default: ['.js']
                }),
                commonjs(),
                // babel({
                //   exclude: ['node_modules/**'],
                //   compact: true,
                //   runtimeHelpers: true
                // }),
                //uglify()
            ],
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./dist/scripts'))
        .on('end', function(){
            gutil.log('JavaScript has been bundled.');
        })
});


 
gulp.task('templates', function () {
var TEMPLATE_HEADER = 'angular.module("<%= module %>", []).run(["$templateCache", function($templateCache) {';

  return gulp.src('./dist/views/**/*.html')
    .pipe(templateCache({
        module: 'app',
        moduleSystem: 'ES6',
        templateHeader: TEMPLATE_HEADER
    }))
    .pipe(gulp.dest('./src/js'))
    .on('end', function(){
        gulp.start('clean');
    })
});