(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgCtrl', DICtrl);

  DICtrl.$inject = ['$scope'];
  function DICtrl($scope) {
    $scope.name = "Meri";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function () {
      return "MessageMessageMessageMessageMessageMessageMessageMessage!!!"
    };

    $scope.feed = function () {
      $scope.stateOfBeing = "fed";
    };
};
})();
