var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var assets = path.join(__dirname, '../dist');

// static - all our js, css, images, etc go into the assets path
app.use(express.static(assets) );

// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function(req, res) {
    res.sendFile(assets + '/views/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
