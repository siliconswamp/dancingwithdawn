angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/login',    { controller: 'LoginCtrl', templateUrl: '/client/login.html' })
})
