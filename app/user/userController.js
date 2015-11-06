/**
 * Created by Kuba on 2015-11-05.
 */
'use strict';


angular.module('myApp.users', [])
    .factory('usersService', UserService)
    .controller('loginCtrl', ['$scope', 'usersService', LoginController])
    .controller('userCtrl', ['$scope', 'usersService', UserController]);
function UserService() {
    var us = this;
    function set(name,surname,image){
        us.name=name;
        us.lastname = surname;
        us.image = image;
    }

//https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Grzegorz_P_Pawlak1.jpg/160px-Grzegorz_P_Pawlak1.jpg
    return {
        name: us.name,
        lastname: us.lastname,
        image: us.image,
        setUser: set
    };
};

function UserController($scope, userService) {
    $scope.user;

    $scope.refresh = function () {
        $scope.user.name = userService.name;
        $scope.user.lastName = userService.lastname;
        $scope.user.image = userService.image;
    }
}