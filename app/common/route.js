/**
 * Created by Kuba on 2015-11-05.
 */

myApp.config(
    ['$routeProvider', function($routeProvider) {
        $routeProvider.when('/homePage', {
            title: 'AppartMates',
            templateUrl: './homePage/homePage.html'
        }).when('/aprove', {
            title: 'Waiting for approve',
            templateUrl: './aprove/aprove.html'
        }).when('/accomplish', {
            title: 'Accomplish duty',
            templateUrl: '../accomplish/accomplish.html'
        }).when('/devide', {
            title: 'Devide expenses',
            templateUrl: './devide/devide.html'
        }).when('/announcement', {
            title: 'Add announcement',
            templateUrl: './announcement/announcement.html'
        }).otherwise({redirectTo: '/homePage'});
    }]);