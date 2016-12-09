app.controller('FidgetController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('fidget controller is running');

  var self = this;

  self.currentUser = DataFactory.currentUser();

}]);
