///<reference path='node/node.d.ts'/>
///<reference path='express/express.d.ts'/>
///<reference path='body-parser/body-parser.d.ts'/>

// BASE SETUP
// =============================================================================
import express    = require('express');
import path       = require('path');
import bodyParser = require('body-parser');

var app        = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 1333;

// ROUTES FOR OUR API
// ============================================================================
var router = express.Router();

// test route to make sure everything is working
router.get('/api/hello', function(req, res) {
    res.json({ message: 'Hello world!' });   
});

// more routes here...

// return simple html page to test correct browserSync refresh
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use('/', router);

// START THE SERVER
// ============================================================================
app.listen(port);
console.log('Server listening on port ' + port + '...');