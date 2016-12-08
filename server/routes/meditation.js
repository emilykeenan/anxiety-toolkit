var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/anxietytoolkit';


// request to get meditations from database
router.get("/", function(req, res){
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

    module.exports = router;
