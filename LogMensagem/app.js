var app = angular.module('myApp', []);

app.factory('LogService', function() {
  var msg = {};
  msg.texto = "" ;
  msg.nivel = 0;
 
  msg.log = function (nivel, mensagem) {
        msg.text = mensagem;
        msg.nivel = nivel;
        
        if(msg.nivel==0){
            console.log(msg.text);
        } else if(msg.nivel==1){
            console.error(msg.text);
        } else{
            console.error("Nivel de mensagem invalido.");
        }
  };
  
 
  return msg;
    
});



app.controller('LogController', ['$scope','LogService', function($scope,LogService) {
    $scope.mensagem = LogService;
    

    
 

}]);

