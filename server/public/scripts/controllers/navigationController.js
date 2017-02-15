app.controller('NavigationController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('nav controller is running');

  var self = this;

  self.logOut = DataFactory.logOut;
  self.currentUser = DataFactory.currentUser();
  self.showMobileNav = false;

  self.signOut = function() {
    self.logOut();
  }

  self.toggleMobileNav = function() {
    if(self.showMobileNav) {
      self.showMobileNav = false;
    } else {
      self.showMobileNav = true;
    }
  }

}]);
