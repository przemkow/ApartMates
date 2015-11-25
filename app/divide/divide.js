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
            $scope.expense = {};
            $scope.expense = false;
            $scope.btnAddExp = false;
        };

        $scope.cancel = function () {
            $scope.expense = {};
            $scope.newExpense = false;
            $scope.btnAddExp = false;
        };

        $scope.debtsList = [
            {
                "id": 0,
                "user_name": "Monika",
                "users_creditor": "Mikolaj",
                "amount": 3,
                "date" : "2015-11-24"
            },
            {
                "id": 1,
                "user_name": "Monika",
                "users_creditor": "Kuba",
                "amount": 3,
                "date" : "2015-11-24"
            },
            {
                "id": 2,
                "user_name": "Przemek",
                "users_creditor": "Monika",
                "amount": 3,
                "date" : "2015-11-24"
            }
        ];

    }])

    .factory('divideFactory', ['$http', usersService]);

