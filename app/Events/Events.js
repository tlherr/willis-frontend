'use strict';

angular.module('Willis.Events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'Events/Events.html',
    controller: 'EventCtrl'
  });
}])

.controller('EventCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
	$http.get('https://data.willischurch.ca/api/events/current')
       .then(function(res){
          $scope.current_events = res.data;
        });
}]);