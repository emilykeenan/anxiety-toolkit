app.controller('MeditationController', ["$http", function($http) {

  console.log('meditation controller running');

  var self = this;
  self.meditations = [];
  self.meditationMode = false;
  self.selectedMeditation = {};
  self.meditationOver = false;
  self.currentMeditation = [];
  self.currentAffirmation = 0;

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
    console.log(self.currentMeditation);
    self.meditationOver = false;
  }

  self.advanceMeditation = function() {
    if(self.currentAffirmation < self.currentMeditation.length - 1) {
      self.currentAffirmation++;
    } else {
      self.currentAffirmation = 0;
    }
  }

  self.previousMeditation = function() {
    if (self.currentAffirmation > 0) {
      self.currentAffirmation--;
    } else {
      self.currentAffirmation = 9;
    }
  }

  self.endMeditation = function() {
    var affirmationTag = angular.element( document.querySelector( '.affirmation' ) );
    affirmationTag.removeClass('active');

    self.meditationMode = false;
    self.currentMeditation = [];
    self.currentAffirmation = 0;
    self.selectedMeditation = {};
  }

}]);
