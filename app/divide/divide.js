'use strict';

var usersService = function ($http) {

    var service = {};
    service.people = {};
    service.getPeople = function ($scope) {
        $http.get('divide/people.json')
            .success(function (data) {
                $scope.usersList = data;
                service.people = data;
            });
        return service.people;
    };

    return service;
};
angular.module('myApp.divide', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/divide', {
            templateUrl: 'divide/divide.html',
            controller: 'divideCtrl'
        });
    }])

    .controller('divideCtrl', ['$scope', 'divideFactory', function ($scope, divideFactory) {
        divideFactory.getPeople($scope);
        $scope.master = {};
        $scope.selection = {};

        var checked;

        $scope.updateAll = function (expense) {
            checked = $scope.expense.all;
            $scope.usersList.forEach(function (sharedUser) {
                $scope.expense.usersList[sharedUser.id] = checked;
            });
        };

        $scope.save = function () {
        }
    }])

.factory('divideFactory', ['$http', usersService]);

