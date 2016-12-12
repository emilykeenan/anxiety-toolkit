app.controller('DragDotController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('drag dot controller is running');

  var self = this;

  self.currentUser = DataFactory.currentUser();

  self.sortableList = [
    {
      color: "hsla(170, 95%, 35%, 1)"
    },
    {
      color: "hsla(170, 95%, 45%, 1)"
    },
    {
      color: "hsla(170, 95%, 55%, 1)"
    },
    {
      color: "hsla(170, 95%, 65%, 1)"
    },
    {
      color: "hsla(170, 95%, 75%, 1)"
    },
    {
      color: "hsla(170, 95%, 85%, 1)"
    },
    {
      color: "hsla(360, 95%, 35%, 1)"
    },
    {
      color: "hsla(360, 95%, 45%, 1)"
    },
    {
      color: "hsla(360, 95%, 55%, 1)"
    },
    {
      color: "hsla(360, 95%, 65%, 1)"
    },
    {
      color: "hsla(360, 95%, 75%, 1)"
    },
    {
      color: "hsla(360, 95%, 85%, 1)"
    },
    {
      color: "hsla(319, 95%, 35%, 1)"
    },
    {
      color: "hsla(319, 95%, 45%, 1)"
    },
    {
      color: "hsla(319, 95%, 55%, 1)"
    },
    {
      color: "hsla(319, 95%, 65%, 1)"
    },
    {
      color: "hsla(319, 95%, 75%, 1)"
    },
    {
      color: "hsla(319, 95%, 85%, 1)"
    },
    {
      color: "hsla(29, 95%, 45%, 1)"
    },
    {
      color: "hsla(29, 95%, 55%, 1"
    },
    {
      color: "hsla(29, 95%, 65%, 1)"
    },
    {
      color: "hsla(29, 95%, 75%, 1)"
    },
    {
      color: "hsla(29, 95%, 85%, 1)"
    },
    {
      color: "hsla(29, 95%, 95%, 1)"
    }, // ended here
    {
      color: "hsla(114, 45%, 45%, 1)"
    },
    {
      color: "hsla(114, 45%, 55%, 1)"
    },
    {
      color: "hsla(114, 45%, 65%, 1)"
    },
    {
      color: "hsla(114, 45%, 75%, 1)"
    },
    {
      color: "hsla(114, 45%, 85%, 1)"
    },
    {
      color: "hsla(114, 45%, 95%, 1)"
    }
  ];

  // Fisher-Yates Shuffle added to randomize order of colored dots
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

self.sortableList = shuffle(self.sortableList);
console.log(self.sortableList);

}]);
