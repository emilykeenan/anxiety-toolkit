app.controller('DragDotController', ['$firebaseAuth', 'DataFactory', '$route', function($firebaseAuth, DataFactory, $route) {

  console.log('drag dot controller is running');

  var self = this;

  self.currentUser = DataFactory.currentUser();
  self.swappingDots = true;
  self.fillingDots = false;

  self.rainbow = [
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
      color: "hsla(29, 95%, 55%, 1)"
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
    },
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
    },
    {
      color: "hsla(61, 95%, 55%, 1)"
    },
    {
      color: "hsla(61, 95%, 65%, 1)"
    },
    {
      color: "hsla(61, 95%, 70%, 1)"
    },
    {
      color: "hsla(61, 95%, 75%, 1)"
    },
    {
      color: "hsla(61, 95%, 80%, 1)"
    },
    {
      color: "hsla(61, 95%, 85%, 1)"
    },
    {
      color: "hsla(268, 85%, 45%, 1)"
    },
    {
      color: "hsla(268, 85%, 55%, 1)"
    },
    {
      color: "hsla(268, 85%, 65%, 1)"
    },
    {
      color: "hsla(268, 85%, 75%, 1)"
    },
    {
      color: "hsla(268, 85%, 85%, 1)"
    },
    {
      color: "hsla(268, 85%, 95%, 1)"
    },
    {
      color: "hsla(230, 45%, 45%, 1)"
    },
    {
      color: "hsla(230, 45%, 55%, 1)"
    },
    {
      color: "hsla(230, 45%, 65%, 1)"
    },
    {
      color: "hsla(230, 45%, 75%, 1)"
    },
    {
      color: "hsla(230, 45%, 85%, 1)"
    },
    {
      color: "hsla(230, 45%, 95%, 1)"
    },
    {
      color: "hsla(231, 5%, 15%, 1)"
    },
    {
      color: "hsla(231, 5%, 35%, 1)"
    },
    {
      color: "hsla(231, 5%, 55%, 1)"
    },
    {
      color: "hsla(231, 5%, 75%, 1)"
    },
    {
      color: "hsla(231, 5%, 85%, 1)"
    },
    {
      color: "hsla(231, 5%, 95%, 1)"
    }
  ];

  self.lightRainbow = [
    {
      color: "hsla(170, 95%, 35%, 0.5)"
    },
    {
      color: "hsla(170, 95%, 45%, 0.5)"
    },
    {
      color: "hsla(170, 95%, 55%, 0.5)"
    },
    {
      color: "hsla(170, 95%, 65%, 0.5)"
    },
    {
      color: "hsla(170, 95%, 75%, 0.5)"
    },
    {
      color: "hsla(170, 95%, 85%, 0.5)"
    },
    {
      color: "hsla(360, 95%, 35%, 0.5)"
    },
    {
      color: "hsla(360, 95%, 45%, 0.5)"
    },
    {
      color: "hsla(360, 95%, 55%, 0.5)"
    },
    {
      color: "hsla(360, 95%, 65%, 0.5)"
    },
    {
      color: "hsla(360, 95%, 75%, 0.5)"
    },
    {
      color: "hsla(360, 95%, 85%, 0.5)"
    },
    {
      color: "hsla(319, 95%, 35%, 0.5)"
    },
    {
      color: "hsla(319, 95%, 45%, 0.5)"
    },
    {
      color: "hsla(319, 95%, 55%, 0.5)"
    },
    {
      color: "hsla(319, 95%, 65%, 0.5)"
    },
    {
      color: "hsla(319, 95%, 75%, 0.5)"
    },
    {
      color: "hsla(319, 95%, 85%, 0.5)"
    },
    {
      color: "hsla(29, 95%, 45%, 0.5)"
    },
    {
      color: "hsla(29, 95%, 55%, 0.5)"
    },
    {
      color: "hsla(29, 95%, 65%, 0.5)"
    },
    {
      color: "hsla(29, 95%, 75%, 0.5)"
    },
    {
      color: "hsla(29, 95%, 85%, 0.5)"
    },
    {
      color: "hsla(29, 95%, 95%, 0.5)"
    },
    {
      color: "hsla(114, 45%, 45%, 0.5)"
    },
    {
      color: "hsla(114, 45%, 55%, 0.5)"
    },
    {
      color: "hsla(114, 45%, 65%, 0.5)"
    },
    {
      color: "hsla(114, 45%, 75%, 0.5)"
    },
    {
      color: "hsla(114, 45%, 85%, 0.5)"
    },
    {
      color: "hsla(114, 45%, 95%, 0.5)"
    },
    {
      color: "hsla(61, 95%, 55%, 0.5)"
    },
    {
      color: "hsla(61, 95%, 65%, 0.5)"
    },
    {
      color: "hsla(61, 95%, 70%, 0.5)"
    },
    {
      color: "hsla(61, 95%, 75%, 0.5)"
    },
    {
      color: "hsla(61, 95%, 80%, 0.5)"
    },
    {
      color: "hsla(61, 95%, 85%, 0.5)"
    },
    {
      color: "hsla(268, 85%, 45%, 0.5)"
    },
    {
      color: "hsla(268, 85%, 55%, 0.5)"
    },
    {
      color: "hsla(268, 85%, 65%, 0.5)"
    },
    {
      color: "hsla(268, 85%, 75%, 0.5)"
    },
    {
      color: "hsla(268, 85%, 85%, 0.5)"
    },
    {
      color: "hsla(268, 85%, 95%, 0.5)"
    },
    {
      color: "hsla(230, 45%, 45%, 0.5)"
    },
    {
      color: "hsla(230, 45%, 55%, 0.5)"
    },
    {
      color: "hsla(230, 45%, 65%, 0.5)"
    },
    {
      color: "hsla(230, 45%, 75%, 0.5)"
    },
    {
      color: "hsla(230, 45%, 85%, 0.5)"
    },
    {
      color: "hsla(230, 45%, 95%, 0.5)"
    },
    {
      color: "hsla(231, 5%, 15%, 0.5)"
    },
    {
      color: "hsla(231, 5%, 35%, 0.5)"
    },
    {
      color: "hsla(231, 5%, 55%, 0.5)"
    },
    {
      color: "hsla(231, 5%, 75%, 0.5)"
    },
    {
      color: "hsla(231, 5%, 85%, 0.5)"
    },
    {
      color: "hsla(231, 5%, 95%, 0.5)"
    }
  ];

  self.grayscale = [
    {
    color: "hsla(231, 5%, 15%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 35%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 55%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 75%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 85%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 95%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 15%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 35%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 55%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 75%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 85%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 95%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 15%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 35%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 55%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 75%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 85%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 95%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 15%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 35%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 55%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 75%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 85%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 95%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 15%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 35%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 55%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 75%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 85%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 95%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 15%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 35%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 55%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 75%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 85%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 95%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 15%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 35%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 55%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 75%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 85%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 95%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 15%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 35%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 55%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 75%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 85%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 95%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 15%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 35%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 55%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 75%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 85%, 0.5)"
  },
  {
    color: "hsla(231, 5%, 95%, 0.5)"
  }
];

  self.sortableList = self.rainbow;

  var tempForSwap = null;
  self.tempIndexForSwap = null;

  self.swapDot = function(item, i) {
    if (tempForSwap === null) {
      tempForSwap = item;
      self.tempIndexForSwap = i;
      console.log(tempForSwap);
    } else {
      self.sortableList[self.tempIndexForSwap] = self.sortableList[i];
      self.sortableList[i] = tempForSwap;
      tempForSwap = null;
      self.tempIndexForSwap = null;

    }
  }

  self.fillDot = function(item, i) {
    if(tempForSwap === null) {
      tempForSwap = item;
      self.tempIndexForSwap = i;
    } else {
      self.sortableList[i] = tempForSwap;
    }
  }

  self.clearFillData = function() {
    tempForSwap = null;
    self.tempIndexForSwap = null;
  }

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

self.shuffleDots = function() {
  self.sortableList = shuffle(self.sortableList);
}

self.switchToLightRainbowTheme = function() {
  self.sortableList = self.lightRainbow;
}

self.switchToRainbowTheme = function() {
  self.sortableList = self.rainbow;
}

self.switchToGrayscaleTheme = function() {
  self.sortableList = self.grayscale;
}

self.switchToFill = function() {
  self.swappingDots = false;
  self.fillingDots = true;
  tempForSwap = null;
  tempIndexForSwap = null;
}

self.switchToSort = function() {
  self.fillingDots = false;
  self.swappingDots = true;
  tempForSwap = null;
  tempIndexForSwap = null;
}

}]);
