var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {

  this.celsius = 32.0;
  this.salario = 0;

  this.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  this.celsiusToFa = function(celsius) {
    answer = parseInt(celsius)*1.8 + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  this.salarioToImposto = function(salario) {
    if(salario<2000)
      answer = parseInt(salario)*0.1;
    else if(salario>=2000 && salario<3500)
       answer = parseInt(salario)*0.2;
    else if (salario>=3500)
      answer = parseInt(salario)*0.3;
    
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

});
