angular.module('livroApp').controller('PrincipalController', ['$scope', 'LivroService', function ($scope, LivroService) {
  $scope.livros = LivroService.query();
  console.log('111');
}]);