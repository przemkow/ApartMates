'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node
var UserCtrl = require('./controllers/UserCtrl');
var AppConstants = require('./shared/AppConstants');
var app = angular.module('myApp', [require('angular-route'), 'AppConstants']);
app.factory('AppConstants', [AppConstants]);


app.config(function($routeProvider) {
  $routeProvider
    .when('/user', {
      templateUrl: './views/user.html',
      controller: 'UserCtrl',
      controllerAs: 'userCtrl'
    })
    .otherwise({
      redirectTo: '/user'
    });
});

app.controller('UserCtrl', ['$scope', UserCtrl]);