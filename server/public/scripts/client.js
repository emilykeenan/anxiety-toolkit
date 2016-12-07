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
    .otherwise({
      redirectTo: 'home'
    });

}]);
