var express =  require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var decoder = require('./modules/decoder');
var meditation = require('./routes/meditation');

// static files
app.get('/', function (req, res) {
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.use(express.static('./server/public'));
app.use(bodyParser.json());

// Decodes the token in the request header and attaches the decoded token to req.decodedToken on the request.
app.use(decoder.token);

// routes
app.use('/meditation', meditation);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Listening on port ', app.get('port'));
});
