'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node

var CurriculumCtrl = require('./controllers/CurriculumCtrl');
var CurriculumService = require('./services/CurriculumService');
var AppConstants = require('./shared/AppConstants');
var app = angular.module('myApp', [require('angular-route'), 'AppConstants']);
app.factory('AppConstants', [AppConstants]);


app.config(function($routeProvider) {
  $routeProvider
    .when('/users', {
      templateUrl: './views/users.html'
    })
    .otherwise({
      redirectTo: '/users'
    });
});

app.factory('UserService', ['$http', '$q', 'GLOBAL_SERVER_URL', UserService]);

app.controller('UserCtrl', ['$scope', 'UserService', CurriculumCtrl]);
