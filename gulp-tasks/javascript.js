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

gulp.task('eslint', function() {
    return gulp.src(['./src/js/**/*.js', '!node_modules/**'])
        .pipe(eslint({useEslintrc: true}))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('bundle:js', ['eslint'], function() {
    return gulp.src(['./src/js/main.js','!node_modules'])
        .pipe(sourcemaps.init())
        .pipe(rollup({
            moduleName: 'app',
            entry: './src/js/main.js',
            allowRealFiles: true,
            format: 'iife',
            sourceMap: true,
            plugins: [
                json(),
                //cleanup({sourceType: "module"}),
                resolve({
                    jsnext: true,
                    main: true,
                    browser: true,
                    extensions: ['.js', '.json'], // Default: ['.js']
                }),
                commonjs({
                    namedExports: {
                        'lodash': ['_']
                    },
                    ignoreGlobal: false,  // Default: false
                    sourceMap: true
                }),
                // babel({
                //   exclude: ['node_modules/**'],
                //   compact: true,
                //   runtimeHelpers: true
                // }),
                //uglify()
            ],
        }))
        .pipe(rename('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/scripts'))
        .on('end', function() {
            gutil.log('JavaScript has been bundled.');
        })
});



gulp.task('templates', function() {
    var TEMPLATE_HEADER = 'angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {';

    return gulp.src('./dist/views/**/*.html')
        .pipe(templateCache({
            module: 'templates',
            moduleSystem: 'ES6',
            standalone: true
        }))
        .pipe(gulp.dest('./src/js/config'))
        .on('end', function() {
            gulp.start('clean');
        })
});
