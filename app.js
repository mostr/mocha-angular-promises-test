var app = angular.module('app', []);

app.controller('HelloCtrl', function($scope, service) {

  $scope.run = function() {
    service.load().then(function(data) {
      $scope.data = data;
    });
  }

});

app.service('service', function($q, $timeout) {

  this.load = function() {
    var dfd = $q.defer();
    dfd.resolve('Hi there');
    return dfd.promise;
  };

});