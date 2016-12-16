var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = '';

// If we are running on Heroku, use the remote database (with SSL)
if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + "?ssl=true";
} else {
    // running locally, use our local database instead
    connectionString = 'postgres://localhost:5432/local_db_name';
}


// request to get meditations from database
router.get('/', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    var userEmail = req.decodedToken.email;
    // check for admin or user-created meditations
    client.query('SELECT * FROM meditations WHERE creator=$1 OR creator=$2 ORDER BY subject',
    [userEmail, 'admin'],
    function(err, result){
      done();
      if(err){
        console.log('Error COMPLETING meditation query task', err);
        res.sendStatus(500);
      }else{
        res.send(result.rows);
      }
    });
  });
});

router.post('/', function(req, res){
  var meditation = req.body;
  console.log(req.body);
  pg.connect(connectionString, function(err, client, done){
    var userEmail = req.decodedToken.email;
    // check for admin or user-created meditations
    client.query('INSERT INTO meditations (subject, creator, affirmation1, affirmation2, affirmation3, affirmation4, affirmation5, ' +
    'affirmation6, affirmation7, affirmation8, affirmation9, affirmation10) ' +
    'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
    [meditation.subject, userEmail, meditation.affirmation1, meditation.affirmation2, meditation.affirmation3, meditation.affirmation4, meditation.affirmation5, meditation.affirmation6, meditation.affirmation7, meditation.affirmation8, meditation.affirmation9, meditation.affirmation10],
    function(err, result){
      done();
      if(err){
        console.log('Error COMPLETING meditation query task', err);
        res.sendStatus(500);
      }else{
        res.sendStatus(201);
      }
    });
  });
});

    module.exports = router;
