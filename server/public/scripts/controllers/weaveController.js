app.controller('WeaveController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('weave controller is running');

  var self = this;

  self.currentUser = DataFactory.currentUser();

}]);
