'use strict';

angular.module('Willis.Elders', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/elders', {
    templateUrl: 'Elders/Elders.html',
    controller: 'EldersCtrl'
  });
}])

.controller('EldersCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

}]);