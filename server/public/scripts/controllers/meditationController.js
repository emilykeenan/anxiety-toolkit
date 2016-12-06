app.controller('MeditationController', ["$http", function($http) {

  console.log('meditation controller running');

  var self = this;
  self.meditations = [];
  self.meditationMode = false;
  self.selectedMeditation = '';

  getMeditations();

  function getMeditations() {
    $http.get('/meditation')
    .then(function(response) {
      self.meditations = response.data;
      console.log('array of meditations', self.meditations);
    });
  }; // end getMeditations function

  self.startMeditation = function(meditation) {
    self.selectedMeditation = meditation;
    console.log(self.selectedMeditation);
    self.meditationMode = true;
  }

}]);
