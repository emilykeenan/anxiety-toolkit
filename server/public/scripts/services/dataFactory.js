app.factory('DataFactory', ['$firebaseAuth', '$http', function($firebaseAuth, $http) {

  console.log('dataFactory running');

  var auth = $firebaseAuth();
  var currentUser = null;

  // This code runs whenever the user logs in
  function logIn(){
    return auth.$signInWithPopup("google").then(function(firebaseUser) {
      console.log("Firebase Authenticated as: ", firebaseUser.user.email);
      currentUser = firebaseUser.user;
      console.log(currentUser);
      return currentUser;
    }).catch(function(error) {
      console.log("Authentication failed: ", error);
    });
  };



  function getCurrentUser() {
      return currentUser;
  }

  function logOut(){
    auth.$signOut().then(function(){
      console.log('Logging the user out!');
    });
  };

  function getMeditations() {
    return meditations;
  }

  var publicApi = {
    currentUser: function() {
      return getCurrentUser();
    },
    logIn: function() {
      return logIn();
    },
    logOut: function() {
      return logOut();
    }
  };

  return publicApi;

}]);
