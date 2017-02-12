'use strict';

angular.module('Willis.Events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/events', {
        templateUrl: 'Events/Events.html',
        controller: 'EventCtrl'
    });

    $routeProvider.when('/events/photos', {
        templateUrl: 'Events/EventPhotos.html',
        controller: 'EventPhotoCtrl'
    });
}])

.controller('EventCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
	$http.get('https://data.willischurch.ca/api/events/current')
       .then(function(res){
          $scope.current_events = res.data;
        });

	$scope.loadPastEvents = function() {
        $http.get('https://data.willischurch.ca/api/events/past')
            .then(function(res){
                $scope.past_events = res.data;
            });
    }

}])
.controller('EventPhotoCtrl', ['$scope', '$http', '$sce', '$routeParams', function($scope, $http, $sce, $routeParams) {
    var nid = $routeParams.nid;

    if(nid.length!=0) {
        $http.get('https://data.willischurch.ca/api/events/photos/'.concat(nid.toString()))
            .then(function(res){
                $scope.photos = res.data;
            });
    }
}]);