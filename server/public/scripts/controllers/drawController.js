app.controller('DrawController', ['$firebaseAuth', 'DataFactory', function($firebaseAuth, DataFactory) {

  console.log('draw controller is running');

  var self = this;

  self.logIn = DataFactory.logIn;
  self.currentUser = DataFactory.currentUser();
  self.logOut = DataFactory.logOut;
  self.loggedIn = DataFactory.loggedIn();
  self.colorOne = 'magenta';
  var canvas = document.getElementById('drawing_stage');
  var context = document.getElementById('drawing_stage').getContext('2d');
  function draw() {
    drawCircleOne();

  }

  function drawCircleOne() {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 75;
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

  draw();

  self.changeColor = function() {
    console.log('button clicked;');
    context.clearRect(0, 0, canvas.width, canvas.height);
    if(self.colorOne == 'magenta') {

      self.colorOne = 'gainsboro';
      draw();
    } else {
      self.colorOne = 'magenta';
      draw();
    }
  }




}]);
