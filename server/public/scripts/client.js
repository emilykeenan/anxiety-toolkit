console.log('hallo world');

var app = angular.module('anxietyToolkit', ['firebase', 'ngRoute', 'ngTouch']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/meditation' ,{
      templateUrl: '/views/templates/meditation.html',
      controller: 'MeditationController',
      controllerAs: 'mc'
    })
    .when('/createmeditation' ,{
      templateUrl: '/views/templates/createmeditation.html',
      controller: 'MeditationController',
      controllerAs: 'mc'
    })
    .when('/fidgets' ,{
      templateUrl: '/views/templates/fidgets.html',
      controller: 'FidgetController',
      controllerAs: 'fc'
    })
    .when('/dragdotfidget' ,{
      templateUrl: '/views/templates/dragdotfidget.html',
      controller: 'DragDotController',
      controllerAs: 'ddc'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);
