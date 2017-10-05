var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.usuarios = [{nome: "Josh", email: "josh@gmail.com", cpf: "1234567891234", end: "rua 1" }];
    $scope.addNovo = function(){
        //$scope.usuarios.push($scope.novo);
        //$scope.novo = '';
          // verifica se o formulário é válido
            if ($scope.userForm.$valid) {
                alert('our form is amazing');
            }
    }; 
});