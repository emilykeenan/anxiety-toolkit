app.factory('DataFactory', ['$firebaseAuth', '$http', function($firebaseAuth, $http) {

  console.log('dataFactory running');

  var auth = $firebaseAuth();

  // This code runs whenever the user logs in
  function logIn(){
    auth.$signInWithPopup("google").then(function(firebaseUser) {
      console.log("Firebase Authenticated as: ", firebaseUser.user.email);
    }).catch(function(error) {
      console.log("Authentication failed: ", error);
    });
  };

  function logOut(){
    auth.$signOut().then(function(){
      console.log('Logging the user out!');
    });
  };

  var publicApi = {
    logIn: function() {
      return logIn();
    },
    logOut: function() {
      return logOut();
    }
  };

  return publicApi;

}]);
