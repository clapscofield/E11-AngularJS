var app = angular.module('myApp', []);

app.factory('CarrinhoDeCompras', function() {
  var lista = {};
  lista.armazena = function (descricao,quantidade,preco) {
        listinha[] = [{desc: descricao, quant: quantidade, preco: preco}];
  };
  
  return lista;
    
});

app.controller('ComprasController', ['$scope','CarrinhoDeCompras', function($scope,CarrinhoDeCompras) {
    this.item = [{desc: "lapis", quant: 1, preco: 1}];
    $scope.carrinho = CarrinhoDeCompras;
    CarrinhoDeCompras.armazena(this.item.desc, this.item.quant, this.item.preco);
    

}]);

app.controller('CheckOutController', ['$scope','temp', function($scope,temp) {


}]);