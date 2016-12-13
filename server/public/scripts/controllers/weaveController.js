app.controller('WeaveController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('weave controller is running');

  var self = this;

  self.currentUser = DataFactory.currentUser();

  self.redHeight = 1;
  self.orangeHeight = 1;
  self.yellowHeight = 1;
  self.greenHeight = 1;
  self.blueHeight = 1;
  self.purpleHeight = 1;

  self.redWidth = 2;
  self.orangeWidth = 2;
  self.yellowWidth = 2;
  self.greenWidth = 2;
  self.blueWidth = 2;
  self.purpleWidth = 2;

  self.growRed = function() {
    if(self.redHeight < 100) {
      self.redHeight += self.redHeight + 10;
      self.redWidth += self.redWidth + 10;
    } else {
      self.redHeight = 1;
      self.redWidth = 2;
    }
  }

  self.growOrange = function() {
    if(self.orangeHeight < 100) {
      self.orangeHeight += self.orangeHeight + 10;
      self.orangeWidth += self.orangeWidth + 10;
    } else {
      self.orangeHeight = 1;
      self.orangeWidth = 2;
    }
  }

  self.growYellow = function() {
    if(self.yellowHeight < 100) {
      self.yellowHeight += self.yellowHeight + 10;
      self.yellowWidth += self.yellowWidth + 10;
    } else {
      self.yellowHeight = 1;
      self.yellowWidth = 2;
    }
  }

  self.growGreen = function() {
    if(self.greenHeight < 100) {
      self.greenHeight += self.greenHeight + 10;
      self.greenWidth += self.greenWidth + 10;
    } else {
      self.greenHeight = 1;
      self.greenWidth = 2;
    }
  }

  self.growBlue = function() {
    if(self.blueHeight < 100) {
      self.blueHeight += self.blueHeight + 10;
      self.blueWidth += self.blueWidth + 10;
    } else {
      self.blueHeight = 1;
      self.blueWidth = 2;
    }
  }

  self.growPurple = function() {
    if(self.purpleHeight < 100) {
      self.purpleHeight += self.purpleHeight + 10;
      self.purpleWidth += self.purpleWidth + 10;
    } else {
      self.purpleHeight = 1;
      self.purpleWidth = 2;
    }
  }

  }]);
