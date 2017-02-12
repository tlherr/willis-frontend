'use strict';

angular.module('Willis.Schedule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'Schedule/Schedule.html',
    controller: 'ScheduleCtrl'
  });
}])

.controller('ScheduleCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $http.get('https://data.willischurch.ca/api/schedule')
        .then(function(res){
            $scope.schedules = res.data;
        });
}]);