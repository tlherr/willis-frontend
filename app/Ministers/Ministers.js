'use strict';

angular.module('Willis.Ministers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ministers', {
    templateUrl: 'Ministers/Ministers.html',
    controller: 'MinistersCtrl'
  });
}])

.controller('MinistersCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $http.get('https://data.willischurch.ca/api/ministers')
        .then(function(res){
            $scope.ministers = res.data;
            console.log(res.data);
        });
}]);