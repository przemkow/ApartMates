'use strict';

var mateService = function($http){

  var service = {};
  service.getMates = function() {
    return $http.get('user/people.json');
  };

  return service;
};

angular.module('myApp.mates', ['ngRoute', 'ngAnimate', 'mwl.confirm'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mate', {
    templateUrl: 'mate/mate.html',
    controller: 'mate'
  });
}])

.controller('mate', ['$scope', 'mateFactory', function($scope, mateFactory) {
  $scope.save = function () {
    $scope.mates.push($scope.mate);

    $scope.mate = {};
    $scope.newMate = false;
    $scope.btnAddMate = false;
  };

  $scope.cancel = function () {
    $scope.mate = {};
    $scope.newMate = false;
    $scope.btnAddMate = false;
  };
  mateFactory.getMates().then(function(response){
    $scope.mates = response.data;
  });
}])
.factory('mateFactory', ['$http',mateService ]);