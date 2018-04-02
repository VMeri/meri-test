(function () {
  'use strict';

  angular.module('DIApp', [])
  .controller('DICtrl', DICtrl);

  function DICtrl($scope, $filter, $injector) {
    $scope.name = "Meri";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
    console.log($injector.annotate(DICtrl));
  };

  function AnnotanteMe(name,job,blah) {
    return "Bbbb";
  }

  console.log(AnnotanteMe().toString());

})();
