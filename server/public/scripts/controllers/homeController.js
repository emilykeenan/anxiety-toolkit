app.controller('HomeController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('home controller is running');

  var self = this;

  self.logIn = DataFactory.logIn;
  self.currentUser = DataFactory.currentUser;

}]);
