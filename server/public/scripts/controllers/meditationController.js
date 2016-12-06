app.controller('MeditationController', ["$http", function($http) {

  console.log('meditation controller running');

  var self = this;
  self.meditations = [];
  self.meditationMode = false;

  getMeditations();

  function getMeditations() {
    $http.get('/meditation')
    .then(function(response) {
      self.meditations = response.data;
      console.log('array of meditations', self.meditations);
    });
  }; // end getMeditations function

  this.startMeditation = function() {
    self.meditationMode = true;
  }

}]);
