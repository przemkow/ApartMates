'use strict';

var usersService = function ($http) {

    var service = {};
    service.people = {};
    service.getPeople = function ($scope) {
        return $http.get('divide/people.json')
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
        divideFactory.getPeople().then(function(response){
            $scope.usersList = response.data;
        });

        $scope.master = {};
        $scope.selection = {};
        $scope.expense = {usersList: {}};

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

