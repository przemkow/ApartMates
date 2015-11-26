/**
 * Created by Kuba on 2015-11-05.
 */

myApp.config(
    ['$routeProvider', function($routeProvider) {
        $routeProvider.when('/homePage', {
            title: 'ApartMates',
            templateUrl: './homePage/homePage.html'
        }).when('/approve', {
            title: 'Waiting for approve',
            templateUrl: './approve/approve.html'
        }).when('/accomplish', {
            title: 'Accomplish duty',
            templateUrl: './accomplish/accomplish.html'
        }).when('/divide', {
            title: 'Divide expenses',
            templateUrl: './divide/divide.html'
        }).when('/announcement', {
            title: 'Add announcement',
            templateUrl: './announcement/announcement.html'
        }).when('/room', {
            title: 'Rooms',
            templateUrl: './room/room.html'
        }).when('/mates', {
            title: 'Mates',
            templateUrl: './mates/mates.html'
        }).otherwise({redirectTo: '/homePage'});
    }]);