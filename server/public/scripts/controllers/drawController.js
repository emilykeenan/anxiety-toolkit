app.controller('DrawController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('draw controller is running');

  var self = this;

  self.logIn = DataFactory.logIn;
  self.currentUser = DataFactory.currentUser();
  self.logOut = DataFactory.logOut;
  self.loggedIn = DataFactory.loggedIn();

  var red = 'hsla(330, 68%, 74%, 1)';
  var orange = 'hsla(41, 100%, 80%, 1)';
  var yellow = 'hsla(56, 86%, 89%, 1)';
  var green = 'hsla(115, 38%, 77%, 1)';
  var blue = 'hsla(199, 88%, 80%, 1)';
  var purple = 'hsla(271, 30%, 66%, 1)';

  self.colorOne = red;
  self.colorTwo = orange;
  self.colorThree = yellow;
  self.colorFour = green;
  self.colorFive = blue;
  self.colorSix = purple;

  // setInterval(changeAllColors, 1000);

  var canvas = document.getElementById('drawing_stage');
  var context = document.getElementById('drawing_stage').getContext('2d');
  function draw() {
    drawCircleOne();
    drawCircleTwo();
    drawCircleThree();
    drawCircleFour();
    drawCircleFive();
    drawCircleSix();
  }

  function drawCircleOne() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 200;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    // line color
    context.fillStyle = self.colorOne;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  function drawCircleTwo() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 130;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    // line color
    context.fillStyle = self.colorTwo;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  function drawCircleThree() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 110;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    // line color
    context.fillStyle = self.colorThree;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  function drawCircleFour() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 90;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    // line color
    context.fillStyle = self.colorFour;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  function drawCircleFive() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 70;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    // line color
    context.fillStyle = self.colorFive;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  function drawCircleSix() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 50;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    // line color
    context.fillStyle = self.colorSix;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  draw();

  self.changeColorOne = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    switch (self.colorOne) {
      case red:
      self.colorOne = orange;
      break;
      case orange:
      self.colorOne = yellow;
      break;
      case yellow:
      self.colorOne = green;
      break;
      case green:
      self.colorOne = blue;
      break;
      case blue:
      self.colorOne = purple;
      break;
      case purple:
      self.colorOne = red;
      break;
    }
    draw();
  }

  self.changeColorTwo = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    switch (self.colorTwo) {
      case red:
      self.colorTwo = orange;
      break;
      case orange:
      self.colorTwo = yellow;
      break;
      case yellow:
      self.colorTwo = green;
      break;
      case green:
      self.colorTwo = blue;
      break;
      case blue:
      self.colorTwo = purple;
      break;
      case purple:
      self.colorTwo = red;
      break;
    }
    draw();
  }

  self.changeColorThree = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    switch (self.colorThree) {
      case red:
      self.colorThree = orange;
      break;
      case orange:
      self.colorThree = yellow;
      break;
      case yellow:
      self.colorThree = green;
      break;
      case green:
      self.colorThree = blue;
      break;
      case blue:
      self.colorThree = purple;
      break;
      case purple:
      self.colorThree = red;
      break;
    }
    draw();
  }

  self.changeColorFour = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    switch (self.colorFour) {
      case red:
      self.colorFour = orange;
      break;
      case orange:
      self.colorFour = yellow;
      break;
      case yellow:
      self.colorFour = green;
      break;
      case green:
      self.colorFour = blue;
      break;
      case blue:
      self.colorFour = purple;
      break;
      case purple:
      self.colorFour = red;
      break;
    }
    draw();
  }

  self.changeColorFive = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    switch (self.colorFive) {
      case red:
      self.colorFive = orange;
      break;
      case orange:
      self.colorFive = yellow;
      break;
      case yellow:
      self.colorFive = green;
      break;
      case green:
      self.colorFive = blue;
      break;
      case blue:
      self.colorFive = purple;
      break;
      case purple:
      self.colorFive = red;
      break;
    }
    draw();
  }

  self.changeColorSix = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    switch (self.colorSix) {
      case red:
      self.colorSix = orange;
      break;
      case orange:
      self.colorSix = yellow;
      break;
      case yellow:
      self.colorSix = green;
      break;
      case green:
      self.colorSix = blue;
      break;
      case blue:
      self.colorSix = purple;
      break;
      case purple:
      self.colorSix = red;
      break;
    }
    draw();
  }

  function changeAllColors() {
    self.changeColorOne();
    self.changeColorTwo();
    self.changeColorThree();
    self.changeColorFour();
    self.changeColorFive();
    self.changeColorSix();
  }




}]);
