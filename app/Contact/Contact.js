'use strict';

angular.module('Willis.Contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'Contact/Contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

}]);