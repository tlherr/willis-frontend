'use strict';

angular.module('Willis.Prayers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prayers', {
    templateUrl: 'Prayers/Prayers.html',
    controller: 'PrayersCtrl'
  });
}])

.controller('PrayersCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $http.get('https://data.willischurch.ca/api/prayers')
        .then(function(res){
            $scope.prayers = res.data;
        });
}]);