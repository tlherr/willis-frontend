'use strict';

angular.module('Willis.Home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'Home/Home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {
    $http.get('https://data.willischurch.ca/api/carousel')
        .then(function(res){
            $scope.carousels = res.data;
            console.log(res.data);
        });
}]);