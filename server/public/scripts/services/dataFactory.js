app.factory('DataFactory', ['$firebaseAuth', '$http', function($firebaseAuth, $http) {

  console.log('dataFactory running');

  var auth = $firebaseAuth();
  var currentUser = null;
  var loggedIn = false;

  // This code runs whenever the user logs in
  function logIn(){
    return auth.$signInWithPopup("google").then(function(firebaseUser) {
      console.log("Firebase Authenticated as: ", firebaseUser.user.email);
      currentUser = firebaseUser.user;
      console.log(currentUser);
      loggedIn = true;
      console.log(loggedIn);
      return loggedIn;
      return currentUser;
    }).catch(function(error) {
      console.log("Authentication failed: ", error);
    });
  };

  // function to get boolean of whether or not there is currently a user that is logged in
  function getUserStatus() {
    return loggedIn;
  }

  // function to get the firebase user
  function getCurrentUser() {
    console.log(loggedIn);
    return currentUser;
  }

  // log out function
  function logOut(){
    return auth.$signOut().then(function(){
      console.log('Logging the user out!');
      var currentUser = null;
      location.reload();
    });
  };

  var publicApi = {
    currentUser: function() {
      return getCurrentUser();
    },
    logIn: function() {
      return logIn();
    },
    loggedIn: function() {
      return getUserStatus();
    },
    logOut: function() {
      return logOut();
    }
  };

  return publicApi;

}]);
