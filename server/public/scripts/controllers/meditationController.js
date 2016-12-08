app.controller('MeditationController', ['$firebaseAuth', 'DataFactory', '$http', function($firebaseAuth, DataFactory, $http) {

  console.log('meditation controller running');
  console.log(DataFactory.currentUser);

  var self = this;
  self.meditations = [];
  self.meditationMode = false;
  self.selectedMeditation = {};
  self.meditationOver = false;
  self.currentMeditation = [];
  self.currentAffirmation = 0;
  self.currentUser = DataFactory.currentUser();

  console.log(self.currentUser);

  // DataFactory.currentUser().then(function(user) {
  //   self.currentUser = user;
  // });

  // gets meditations from database
  getMeditations();

  // function to get meditations from the database
  function getMeditations() {
    $http.get('/meditation')
    .then(function(response) {
      self.meditations = response.data;
      console.log(DataFactory.currentUser);
    });
  }; // end getMeditations function

  //function to start meditation when a meditation is selected
  self.startMeditation = function(meditation) {
    self.selectedMeditation = meditation;
    self.meditationMode = true;
    self.currentMeditation.push(self.selectedMeditation.affirmation1);
    self.currentMeditation.push(self.selectedMeditation.affirmation2);
    self.currentMeditation.push(self.selectedMeditation.affirmation3);
    self.currentMeditation.push(self.selectedMeditation.affirmation4);
    self.currentMeditation.push(self.selectedMeditation.affirmation5);
    self.currentMeditation.push(self.selectedMeditation.affirmation6);
    self.currentMeditation.push(self.selectedMeditation.affirmation7);
    self.currentMeditation.push(self.selectedMeditation.affirmation8);
    self.currentMeditation.push(self.selectedMeditation.affirmation9);
    self.currentMeditation.push(self.selectedMeditation.affirmation10);
    self.meditationOver = false;

  }

  // function to advance to the next affirmation in meditation
  self.advanceMeditation = function() {
    if(self.currentAffirmation < self.currentMeditation.length - 1) {
      self.currentAffirmation++;
    } else {
      self.meditationOver = true;
    }
  }

  // function to end the current meditation and choose another
  self.endMeditation = function() {
    self.meditationMode = false;
    self.currentMeditation = [];
    self.currentAffirmation = 0;
    self.selectedMeditation = {};
  }

}]);
