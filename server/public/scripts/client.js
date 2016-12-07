console.log('hallo world');

var app = angular.module('anxietyToolkit', ['ngRoute', 'ngAnimate', 'ngTouch']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/meditation' ,{
      templateUrl: '/views/templates/meditation.html',
      controller: 'MeditationController',
      controllerAs: 'mc'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);
