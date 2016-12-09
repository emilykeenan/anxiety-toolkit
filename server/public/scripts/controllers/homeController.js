app.controller('HomeController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('home controller is running');

  var self = this;

  self.logIn = DataFactory.logIn;
  self.currentUser = DataFactory.currentUser();
  self.logOut = DataFactory.logOut;
  self.loggedIn = DataFactory.loggedIn();

  // function to sign in and change user state
  self.signIn = function() {
    self.logIn().then( function(){
    self.loggedIn = DataFactory.loggedIn();
  });
}

}]);
