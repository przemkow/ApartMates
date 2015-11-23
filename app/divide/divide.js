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


    .factory('divideFactory', function () {
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