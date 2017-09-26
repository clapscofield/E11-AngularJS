var app = angular.module('myApp', []);

app.factory('CarrinhoDeCompras', function() {
  var list = {};
  list.lista = [];
  list.total = 0;
 
  list.armazena = function (descricao,preco,quantidade) {
        list.lista.push({desc: descricao, preco: preco, quantidade: quantidade});
        list.total = list.total + (quantidade*preco);
        console.log(list.lista);
  };
  
 
  return list;
    
});



app.controller('ComprasController', ['$scope','CarrinhoDeCompras', function($scope,CarrinhoDeCompras) {
    $scope.carrinho = CarrinhoDeCompras;

    
 

}]);

app.controller('CheckOutController', ['$scope','CarrinhoDeCompras', function($scope,CarrinhoDeCompras) {
    $scope.listando = CarrinhoDeCompras;
  
}]);