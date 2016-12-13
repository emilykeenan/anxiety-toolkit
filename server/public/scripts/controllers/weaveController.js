app.controller('WeaveController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('weave controller is running');

  var self = this;

  self.currentUser = DataFactory.currentUser();

  self.red = {
    height:1,
    width: 2,
  };

  self.orange = {
    height:1,
    width: 2,
  };

  self.yellow = {
    height:1,
    width: 2,
  };

  self.green = {
    height:1,
    width: 2,
  };

  self.blue = {
    height:1,
    width: 2,
  };

  self.purple = {
    height:1,
    width: 2,
  };

  self.growRed = function() {
    if(self.red.height < 100) {
      self.red.height += 10;
      self.red.width += 10;
    } else {
      self.red.height = 1;
      self.red.width = 2;
    }
  }

  self.growOrange = function() {
    if(self.orange.height < 100) {
      self.orange.height += 10;
      self.orange.width += 10;
    } else {
      self.orange.height = 1;
      self.orange.width = 2;
    }
  }

  self.growYellow = function() {
    if(self.yellow.height < 100) {
      self.yellow.height += 10;
      self.yellow.width += 10;
    } else {
      self.yellow.height = 1;
      self.yellow.width = 2;
    }
  }

  self.growGreen = function() {
    if(self.green.height < 100) {
      self.green.height += 10;
      self.green.width += 10;
    } else {
      self.green.height = 1;
      self.green.width = 2;
    }
  }

  self.growBlue = function() {
    if(self.blue.height < 100) {
      self.blue.height += 10;
      self.blue.width += 10;
    } else {
      self.blue.height = 1;
      self.blue.width = 2;
    }
  }

  self.growPurple = function() {
    if(self.purple.height < 100) {
      self.purple.height += 10;
      self.purple.width += 10;
    } else {
      self.purple.height = 1;
      self.purple.width = 2;
    }
  }

}]);
