var app = angular.module('myApp', []);

app.controller('contactController', function($scope) {
            $scope.editnome;
			$scope.edittelefone;
			$scope.editemail;
			$scope.id;

          $scope.counter = 0;
          $scope.list = [];
          $scope.adiciona = function() {
            $scope.list.push({nome: $scope.nome, email: $scope.email, telefone: $scope.telefone});
          };

           $scope.edita = function(id) {
            var contact;
				for(var i=0;i<$scope.list.length;i++){
					if($scope.list[i].id==id){
						list = $scope.list[i];
						$scope.id = i;
					}
				}
				$scope.editnome = list.nome;
				$scope.edittelefone = list.telefone;
                $scope.editemail = list.email;
                

          };
          $scope.altera = function(){
                $scope.list[$scope.id].nome = $scope.editnome;
				$scope.list[$scope.id].telefone = $scope.edittelefone;
				$scope.list[$scope.id].email = $scope.editemail;
          };

          $scope.remove = function() {
            $scope.list.pop();

          };
        


    });  