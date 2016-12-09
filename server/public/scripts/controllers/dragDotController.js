app.controller('DragDotController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('drag dot controller is running');

  var self = this;

  self.currentUser = DataFactory.currentUser();

  self.sortableList = [
    {
      id: "id-000",
      title: "item 000"
    },
    {
      id: "id-001",
      title: "item 001"
    },
    {
      id: "id-002",
      title: "item 002"
    },
  ];

}]);
