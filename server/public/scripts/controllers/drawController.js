app.controller('DrawController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('draw controller is running');

  var self = this;

  self.logIn = DataFactory.logIn;
  self.currentUser = DataFactory.currentUser();
  self.logOut = DataFactory.logOut;
  self.loggedIn = DataFactory.loggedIn();

  // declaring interval variable for animation
  var interval;

  // declaring color variables
  var red = 'hsla(330, 68%, 74%, 1)';
  var orange = 'hsla(41, 100%, 80%, 1)';
  var yellow = 'hsla(56, 86%, 89%, 1)';
  var green = 'hsla(115, 38%, 77%, 1)';
  var blue = 'hsla(199, 88%, 80%, 1)';
  var purple = 'hsla(271, 30%, 66%, 1)';
  var background = 'hsla(170, 51%, 92%, 0.5)';

  // declaring starting colors and shapes for drawing
  self.colorOne = red;
  self.colorTwo = orange;
  self.colorThree = yellow;
  self.colorFour = green;
  self.colorFive = blue;
  self.colorSix = purple;
  self.currentShapes = 'triangles';

  // declaring canvas and context
  var canvas = document.getElementById('drawing_stage');
  var context = document.getElementById('drawing_stage').getContext('2d');

  // drawing circles to start fidget
  draw();

  // function to draw appropriate canvas based on current shapes
  function draw() {
    if (self.currentShapes == 'circles') {
      drawCircles();
    } else if (self.currentShapes == 'triangles') {
      drawTriangles();
    } else {
      drawCircles();
    }
  }

  // function to draw triangles
  function drawTriangles() {
      drawTrianglesLineOne();
      drawTrianglesLineTwo();
      drawTrianglesLineThree();
      drawTrianglesLineFour();
      drawTrianglesLineFive();
      drawTrianglesLineSix();
  }

  // function to draw circle canvas
  function drawCircles() {
    drawCircleOne();
    drawCircleTwo();
    drawCircleThree();
    drawCircleFour();
    drawCircleFive();
    drawCircleSix();
  }

  // functions to draw individual circles
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

    context.fillStyle = self.colorOne;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  function drawCircleTwo() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 135;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    context.fillStyle = self.colorTwo;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  function drawCircleThree() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 105;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    context.fillStyle = self.colorThree;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  function drawCircleFour() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 75;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    context.fillStyle = self.colorFour;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  function drawCircleFive() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 45;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    context.fillStyle = self.colorFive;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  function drawCircleSix() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 20;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 365;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 2;

    context.fillStyle = self.colorSix;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();
  }

  // function to draw the first line of Triangles
  function drawTrianglesLineOne() {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(24, 48);
    context.lineTo(48, 0);
    context.lineTo(0, 0);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 0);
    context.lineTo(72, 48);
    context.lineTo(96, 0);
    context.lineTo(48, 0);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 0);
    context.lineTo(120, 48);
    context.lineTo(144, 0);
    context.lineTo(96, 0);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 0);
    context.lineTo(168, 48);
    context.lineTo(192, 0);
    context.lineTo(144, 0);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 0);
    context.lineTo(216, 48);
    context.lineTo(240, 0);
    context.lineTo(192, 0);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 0);
    context.lineTo(264, 48);
    context.lineTo(288, 0);
    context.lineTo(240, 0);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    // begin inverted triangles

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, 48);
    context.lineTo(24, 48);
    context.lineTo(0, 0);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 0);
    context.lineTo(24, 48);
    context.lineTo(72, 48);
    context.lineTo(48, 0);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 0);
    context.lineTo(72, 48);
    context.lineTo(120, 48);
    context.lineTo(96, 0);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 0);
    context.lineTo(120, 48);
    context.lineTo(168, 48);
    context.lineTo(144, 0);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 0);
    context.lineTo(216, 48);
    context.lineTo(168, 48);
    context.lineTo(192, 0);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 0);
    context.lineTo(264, 48);
    context.lineTo(216, 48);
    context.lineTo(240, 0);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(288, 0);
    context.lineTo(288, 48);
    context.lineTo(264, 48);
    context.lineTo(288, 0);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

  }

  // function to draw the second line of Triangles
  function drawTrianglesLineTwo() {
    context.beginPath();
    context.moveTo(0, 48);
    context.lineTo(24, 96);
    context.lineTo(48, 48);
    context.lineTo(0, 48);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 48);
    context.lineTo(72, 96);
    context.lineTo(96, 48);
    context.lineTo(48, 48);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 48);
    context.lineTo(120, 96);
    context.lineTo(144, 48);
    context.lineTo(96, 48);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 48);
    context.lineTo(168, 96);
    context.lineTo(192, 48);
    context.lineTo(144, 48);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 48);
    context.lineTo(216, 96);
    context.lineTo(240, 48);
    context.lineTo(192, 48);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 48);
    context.lineTo(264, 96);
    context.lineTo(288, 48);
    context.lineTo(240, 48);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    // begin inverted triangles

    context.beginPath();
    context.moveTo(0, 48);
    context.lineTo(0, 96);
    context.lineTo(24, 96);
    context.lineTo(0, 48);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 48);
    context.lineTo(24, 96);
    context.lineTo(72, 96);
    context.lineTo(48, 48);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 48);
    context.lineTo(72, 96);
    context.lineTo(120, 96);
    context.lineTo(96, 48);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 48);
    context.lineTo(120, 96);
    context.lineTo(168, 96);
    context.lineTo(144, 48);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 48);
    context.lineTo(216, 96);
    context.lineTo(168, 96);
    context.lineTo(192, 48);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 48);
    context.lineTo(264, 96);
    context.lineTo(216, 96);
    context.lineTo(240, 48);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(288, 48);
    context.lineTo(288, 96);
    context.lineTo(264, 96);
    context.lineTo(288, 48);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

  }

  // function to draw the third line of Triangles
  function drawTrianglesLineThree() {
    context.beginPath();
    context.moveTo(0, 96);
    context.lineTo(24, 144);
    context.lineTo(48, 96);
    context.lineTo(0, 96);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 96);
    context.lineTo(72, 144);
    context.lineTo(96, 96);
    context.lineTo(48, 96);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 96);
    context.lineTo(120, 144);
    context.lineTo(144, 96);
    context.lineTo(96, 96);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 96);
    context.lineTo(168, 144);
    context.lineTo(192, 96);
    context.lineTo(144, 96);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 96);
    context.lineTo(216, 144);
    context.lineTo(240, 96);
    context.lineTo(192, 96);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 96);
    context.lineTo(264, 144);
    context.lineTo(288, 96);
    context.lineTo(240, 96);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    // begin inverted triangles

    context.beginPath();
    context.moveTo(0, 96);
    context.lineTo(0, 144);
    context.lineTo(24, 144);
    context.lineTo(0, 96);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 96);
    context.lineTo(24, 144);
    context.lineTo(72, 144);
    context.lineTo(48, 96);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 96);
    context.lineTo(72, 144);
    context.lineTo(120, 144);
    context.lineTo(96, 96);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 96);
    context.lineTo(120, 144);
    context.lineTo(168, 144);
    context.lineTo(144, 96);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 96);
    context.lineTo(216, 144);
    context.lineTo(168, 144);
    context.lineTo(192, 96);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 96);
    context.lineTo(264, 144);
    context.lineTo(216, 144);
    context.lineTo(240, 96);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(288, 96);
    context.lineTo(288, 144);
    context.lineTo(264, 144);
    context.lineTo(288, 96);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

  }

  // function to draw the fourth line of Triangles
  function drawTrianglesLineFour() {
    context.beginPath();
    context.moveTo(0, 144);
    context.lineTo(24, 192);
    context.lineTo(48, 144);
    context.lineTo(0, 144);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 144);
    context.lineTo(72, 192);
    context.lineTo(96, 144);
    context.lineTo(48, 144);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 144);
    context.lineTo(120, 192);
    context.lineTo(144, 144);
    context.lineTo(96, 144);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 144);
    context.lineTo(168, 192);
    context.lineTo(192, 144);
    context.lineTo(144, 144);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 144);
    context.lineTo(216, 192);
    context.lineTo(240, 144);
    context.lineTo(192, 144);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 144);
    context.lineTo(264, 192);
    context.lineTo(288, 144);
    context.lineTo(240, 144);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    // begin inverted triangles

    context.beginPath();
    context.moveTo(0, 144);
    context.lineTo(0, 192);
    context.lineTo(24, 192);
    context.lineTo(0, 144);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 144);
    context.lineTo(24, 192);
    context.lineTo(72, 192);
    context.lineTo(48, 144);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 144);
    context.lineTo(72, 192);
    context.lineTo(120, 192);
    context.lineTo(96, 144);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 144);
    context.lineTo(120, 192);
    context.lineTo(168, 192);
    context.lineTo(144, 144);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 144);
    context.lineTo(216, 192);
    context.lineTo(168, 192);
    context.lineTo(192, 144);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 144);
    context.lineTo(264, 192);
    context.lineTo(216, 192);
    context.lineTo(240, 144);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(288, 144);
    context.lineTo(288, 192);
    context.lineTo(264, 192);
    context.lineTo(288, 144);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

  }

  // function to draw the fifth line of Triangles
  function drawTrianglesLineFive() {
    context.beginPath();
    context.moveTo(0, 192);
    context.lineTo(24, 240);
    context.lineTo(48, 192);
    context.lineTo(0, 192);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 192);
    context.lineTo(72, 240);
    context.lineTo(96, 192);
    context.lineTo(48, 192);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 192);
    context.lineTo(120, 240);
    context.lineTo(144, 192);
    context.lineTo(96, 192);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 192);
    context.lineTo(168, 240);
    context.lineTo(192, 192);
    context.lineTo(144, 192);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 192);
    context.lineTo(216, 240);
    context.lineTo(240, 192);
    context.lineTo(192, 192);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 192);
    context.lineTo(264, 240);
    context.lineTo(288, 192);
    context.lineTo(240, 192);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    // begin inverted triangles

    context.beginPath();
    context.moveTo(0, 192);
    context.lineTo(0, 240);
    context.lineTo(24, 240);
    context.lineTo(0, 192);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 192);
    context.lineTo(24, 240);
    context.lineTo(72, 240);
    context.lineTo(48, 192);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 192);
    context.lineTo(72, 240);
    context.lineTo(120, 240);
    context.lineTo(96, 192);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 192);
    context.lineTo(120, 240);
    context.lineTo(168, 240);
    context.lineTo(144, 192);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 192);
    context.lineTo(216, 240);
    context.lineTo(168, 240);
    context.lineTo(192, 192);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 192);
    context.lineTo(264, 240);
    context.lineTo(216, 240);
    context.lineTo(240, 192);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(288, 192);
    context.lineTo(288, 240);
    context.lineTo(264, 240);
    context.lineTo(288, 192);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

  }

  // function to draw the sixth line of Triangles
  function drawTrianglesLineSix() {
    context.beginPath();
    context.moveTo(0, 240);
    context.lineTo(24, 288);
    context.lineTo(48, 240);
    context.lineTo(0, 240);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 240);
    context.lineTo(72, 288);
    context.lineTo(96, 240);
    context.lineTo(48, 240);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 240);
    context.lineTo(120, 288);
    context.lineTo(144, 240);
    context.lineTo(96, 240);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 240);
    context.lineTo(168, 288);
    context.lineTo(192, 240);
    context.lineTo(144, 240);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 240);
    context.lineTo(216, 288);
    context.lineTo(240, 240);
    context.lineTo(192, 240);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 240);
    context.lineTo(264, 288);
    context.lineTo(288, 240);
    context.lineTo(240, 240);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    // begin inverted triangles

    context.beginPath();
    context.moveTo(0, 240);
    context.lineTo(0, 288);
    context.lineTo(24, 288);
    context.lineTo(0, 240);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(48, 240);
    context.lineTo(24, 288);
    context.lineTo(72, 288);
    context.lineTo(48, 240);
    context.closePath();
    context.fillStyle = self.colorSix;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(96, 240);
    context.lineTo(72, 288);
    context.lineTo(120, 288);
    context.lineTo(96, 240);
    context.closePath();
    context.fillStyle = self.colorOne;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(144, 240);
    context.lineTo(120, 288);
    context.lineTo(168, 288);
    context.lineTo(144, 240);
    context.closePath();
    context.fillStyle = self.colorTwo;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(192, 240);
    context.lineTo(216, 288);
    context.lineTo(168, 288);
    context.lineTo(192, 240);
    context.closePath();
    context.fillStyle = self.colorThree;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(240, 240);
    context.lineTo(264, 288);
    context.lineTo(216, 288);
    context.lineTo(240, 240);
    context.closePath();
    context.fillStyle = self.colorFour;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(288, 240);
    context.lineTo(288, 288);
    context.lineTo(264, 288);
    context.lineTo(288, 240);
    context.closePath();
    context.fillStyle = self.colorFive;
    context.lineWidth = 1;
    context.strokeStyle = '#647375';
    context.fill();
    context.stroke();

  }


  // functions to change individual colors
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
      self.colorOne = background;
      break;
      case background:
      self.colorOne = red;
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
      self.colorTwo = background;
      break;
      case background:
      self.colorTwo = red;
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
      self.colorThree = background;
      break;
      case background:
      self.colorThree = red;
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
      self.colorFour = background;
      break;
      case background:
      self.colorFour = red;
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
      self.colorFive = background;
      break;
      case background:
      self.colorFive = red;
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
      self.colorSix = background;
      break;
      case background:
      self.colorSix = red;
    }
    draw();
  }

  // function to change all colors at once
  function changeAllColors() {
    self.changeColorOne();
    self.changeColorTwo();
    self.changeColorThree();
    self.changeColorFour();
    self.changeColorFive();
    self.changeColorSix();
  }

  // function to change all colors at an interval
  self.startAnimation = function() {
      interval = setInterval(changeAllColors, 1000);
  }

  // function to stop color changing interval
  self.stopAnimation = function() {
    console.log('clicked');
    clearInterval(interval);
    interval = null;
  }

  // function to change current shape to circles and redraw canvas
  self.changeToCircles = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    self.currentShapes = 'circles';
    draw();
  }

  // function to change current shape to squares and redraw canvas
  self.changeToSquares = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    self.currentShapes = 'squares';
    draw();
  }

  // function to change current shape to triangles and redraw canvas
  self.changeToTriangles = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    self.currentShapes = 'triangles';
    draw();
  }




}]);
