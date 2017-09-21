var app = angular.module('myApp', []);

app.factory('temp', function() {
  var service = {};
  service.k = function (celsius) {
        answer = parseInt(celsius) + 273.5;
        if (isNaN(answer)) {
          return 0;
        } else {
          return  answer;
        }
  };
  service.f = function(celsius) {
      answer = parseInt(celsius) * 1.8 + 32;
      if (isNaN(answer)) {
        return 0;
      } else {
        return  answer;
      }
  };
  return service;
    
});

app.controller('TemperaturaController', ['$scope','temp', function($scope,temp) {

  this.celsius = 32.0;
  $scope.temp = temp;
  temp.k(this.celsius);
  temp.f(this.celsius);

  

}]);
