'use strict';

angular.module('Willis.History', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/history', {
    templateUrl: 'History/History.html',
    controller: 'HistoryCtrl'
  });
}])

.controller('HistoryCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $http.get('https://data.willischurch.ca/api/history')
        .then(function(res){
            $scope.historical_events = res.data;
        });
}]);