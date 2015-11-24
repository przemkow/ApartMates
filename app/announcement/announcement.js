'use strict';

angular.module('myApp.announcement', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/announcement', {
    templateUrl: 'announcement/announcement.html',
    controller: 'announcementCtrl'
  });
}])

.controller('announcementCtrl', ['$scope', 'announcementFactory', function ($scope, usersService) {
  usersService.getPeople($scope);

  $scope.update = function(expense) {
    $scope.master = angular.copy(expense); //tutaj można zapisać dane z formularza
  };

  $scope.toggleAll = function() {
    var toggleStatus = $scope.isAllSelected;
    angular.forEach($scope.usersList, function(item){
      item.selected = toggleStatus; });
  };

  $scope.optionToggled = function(){
    $scope.isAllSelected = $scope.usersList.every(function(item){
      return item.selected; })

  };
}])


.factory('announcementFactory', ['$http',usersService ]);