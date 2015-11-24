'use strict';

angular.module('myApp.divide', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/divide', {
            templateUrl: 'divide/divide.html',
            controller: 'divideCtrl'
        });
    }])

    .controller('divideCtrl', ['$scope', 'divideFactory', function ($scope, divideFactory) {
        $scope.usersList = divideFactory.getData;

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


    .factory('divideFactory', function () {

        var expensesList = [{
            id: 0,
            user: "Monika",
            desc: "milk and honey",
            total: 12,
            oneShare: 4
        },
            {
                id: 1,
                user: "Przemek",
                desc: "domestos",
                total: 7,
                oneShare: 1.3

            }];

        return {
            getData: [
                {id: 0, user_name: "Monika"},
                {id: 1, user_name: "Kuba"},
                {id: 2, user_name: "Mikołaj"},
                {id: 3, user_name: "Przemek"},
                {id: 4, user_name: "John"}
            ]
        };
    });