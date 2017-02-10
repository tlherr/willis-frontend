'use strict';

angular.module('Willis.Events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'Events/Events.html',
    controller: 'EventCtrl'
  });
}])

.controller('EventCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
	$http.get('http://data.willischurch.ca/api/events')
       .then(function(res){
       	  for(var key in res.data) {
       	   res.data[key].safe_body = $sce.trustAsHtml(res.data[key].body);
       	   res.data[key].field_safe_event_image = $sce.trustAsHtml(res.data[key].field_event_image);
       	   res.data[key].field_safe_date = $sce.trustAsHtml(res.data[key].field_date);
       	   res.data[key].field_safe_end_date = $sce.trustAsHtml(res.data[key].field_end_date);
       	  }

       	  console.log(res.data);
          $scope.events = res.data;                
        });
}]);