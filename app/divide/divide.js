'use strict';
var divideService =function($http){

    var service = {};
    service.getPeople = function($scope) {
        $http.get('divide/people.json')
            .success(function(data) {
                $scope.usersList = data;
            });
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


    .factory('divideFactory', ['$http',divideService ]);