app.controller('NavigationController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('nav controller is running');

  var self = this;

  self.logOut = DataFactory.logOut;
  self.currentUser = DataFactory.currentUser();

  self.signOut = function() {
    self.logOut();

  }

}]);
