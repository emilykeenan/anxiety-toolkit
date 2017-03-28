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

  self.animate = {
    'animation': 'slideDown 1s linear'
  }

  self.growRed = function() {
    if(self.red.height < 100 && self.red.width < 20) {
      self.red.height += 14;
      self.red.width += 18.25;
    } else if (self.red.height < 100 && self.red.width > 20){
      self.red.height += 8;
      self.red.width += 15;
    } else {
      self.red.height = 1;
      self.red.width = 2;
    }
  }

  self.growOrange = function() {
    if(self.orange.height < 100 && self.orange.width < 20) {
      self.orange.height += 14;
      self.orange.width += 18.25;
    } else if (self.orange.height < 100 && self.orange.width > 20){
      self.orange.height += 8;
      self.orange.width += 15;
    } else {
      self.orange.height = 1;
      self.orange.width = 2;
    }
  }

  self.growYellow = function() {
    if(self.yellow.height < 100 && self.yellow.width < 20) {
      self.yellow.height += 14;
      self.yellow.width += 18.25;
    } else if (self.yellow.height < 100 && self.yellow.width > 20){
      self.yellow.height += 8;
      self.yellow.width += 15;
    } else {
      self.yellow.height = 1;
      self.yellow.width = 2;
    }
  }

  self.growGreen = function() {
    if(self.green.height < 100 && self.green.width < 20) {
      self.green.height += 14;
      self.green.width += 18.25;
    } else if (self.green.height < 100 && self.green.width > 20){
      self.green.height += 8;
      self.green.width += 15;
    } else {
      self.green.height = 1;
      self.green.width = 2;
    }
  }

  self.growBlue = function() {
    if(self.blue.height < 100 && self.blue.width < 20) {
      self.blue.height += 14;
      self.blue.width += 18.25;
    } else if (self.blue.height < 100 && self.blue.width > 20){
      self.blue.height += 8;
      self.blue.width += 15;
    } else {
      self.blue.height = 1;
      self.blue.width = 2;
    }
  }

  self.growPurple = function() {
    if(self.purple.height < 100 && self.purple.width < 20) {
      self.purple.height += 14;
      self.purple.width += 18.25;
    } else if (self.purple.height < 100 && self.purple.width > 20){
      self.purple.height += 8;
      self.purple.width += 15;
    } else {
      self.purple.height = 1;
      self.purple.width = 2;
    }
  }

}]);
