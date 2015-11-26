'use strict';

angular.module('myApp.divide', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/divide', {
            templateUrl: 'divide/divide.html',
            controller: 'divideCtrl'
        });
    }])

    .controller('divideCtrl', ['$scope', 'divideFactory', 'userFactory', function ($scope, divideFactory, userFactory) {
        userFactory.getPeople().then(function(response){
            $scope.usersList = response.data;
        });

        divideFactory.getDebts().then(function(response){
            console.log(response);
            $scope.debtsList = response.data;
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
            $scope.newExpense = false;
            $scope.btnAddExp = false;
        };

        $scope.cancel = function () {
            $scope.expense = {};
            $scope.newExpense = false;
            $scope.btnAddExp = false;
        };
/*
        $scope.date = new Date();

        $scope.$watch('date', function (date)
        {
            $scope.dateString = dateFilter(date, 'yyyy-MM-dd');
            console.log('A', $scope.date, $scope.expense.date);
        });

        $scope.$watch('dateString', function (dateString)
        {
            $scope.date = new Date(dateString);
            console.log('B', $scope.date, $scope.expense.date);
        });
*/
    }])

    .factory('divideFactory', ['$http', function($http){
        var factory = {};
        factory.debts = {};
        factory.getDebts = function () {
            return $http.get('divide/debts.json')
        };

        return factory;
    }]);

