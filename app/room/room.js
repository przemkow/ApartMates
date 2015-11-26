'use strict';

var roomService = function($http){

  var service = {};
  service.getRooms = function() {
    return $http.get('room/room.json');
  };

  return service;
};

angular.module('myApp.room', ['ngRoute', 'ngAnimate', 'mwl.confirm'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/approve', {
    templateUrl: 'room/room.html',
    controller: 'room'
  });
}])

.controller('room', ['$scope', 'roomFactory', function($scope, roomFactory) {
  $scope.save = function () {
    $scope.rooms.push($scope.room);

    $scope.room = {};
    $scope.newRoom = false;
    $scope.btnAddRoom = false;
  };

  $scope.frequencyList=['1 day', '2 days', '5 days', '7 days', '2 weeks', '1 month'];

  $scope.cancel = function () {
    $scope.room = {};
    $scope.newRoom = false;
    $scope.btnAddRoom = false;
  };
  roomFactory.getRooms().then(function(response){
    $scope.rooms = response.data;
  });
}])
.factory('roomFactory', ['$http',roomService ]);