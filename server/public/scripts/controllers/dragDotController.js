app.controller('DragDotController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('drag dot controller is running');

  var self = this;

  self.currentUser = DataFactory.currentUser();

}]);
