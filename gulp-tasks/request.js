var gulp = require('gulp'),
    request = require('request'),
    source = require('vinyl-source-stream')
bufffer = require('vinyl-buffer');

var apikey = 'RGAPI-a81fdfbd-3ab7-4f75-94e2-6ebd14be4a17';

function get(path, locale) {
    if (!path) {
        return;
    }

    var lang = (typeof locale != 'undefined') ? '&locale=' + locale + '_' + locale.toUpperCase() : '';
    return request({
        url: 'https://global.api.pvp.net/api/lol/static-data/eune/v1.2/' + path + lang + '&api_key=' + apikey,
        headers: {
            'User-Agent': 'request'
        }
    });
}

gulp.task('bundle:json', function() {
    get('item?itemListData=all', 'pl')
    .pipe(source('items.json'))
    .pipe(gulp.dest('./src/data'));

    get('champion?champData=all', 'pl')
    .pipe(source('champions.json'))
    .pipe(gulp.dest('./src/data'));


});
