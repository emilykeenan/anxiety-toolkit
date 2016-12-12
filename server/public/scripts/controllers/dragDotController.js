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
    {
      id: "id-002",
      title: "item 003"
    },
    {
      id: "id-002",
      title: "item 004"
    },
    {
      id: "id-002",
      title: "item 005"
    },
    {
      id: "id-002",
      title: "item 006"
    },
    {
      id: "id-002",
      title: "item 007"
    },
    {
      id: "id-002",
      title: "item 008"
    },
    {
      id: "id-002",
      title: "item 008"
    },
    {
      id: "id-002",
      title: "item 009"
    },
    {
      id: "id-002",
      title: "item 010"
    },
    {
      id: "id-002",
      title: "item 011"
    },
    {
      id: "id-002",
      title: "item 012"
    },
    {
      id: "id-002",
      title: "item 013"
    },
    {
      id: "id-002",
      title: "item 014"
    },
    {
      id: "id-002",
      title: "item 015"
    },
    {
      id: "id-002",
      title: "item 016"
    }
  ];

  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

self.sortableList = shuffle(self.sortableList);
console.log(self.sortableList);

}]);
