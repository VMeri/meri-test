(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgCtrl', DICtrl);

  DICtrl.$inject = ['$scope'];
  function DICtrl($scope) {
    $scope.name = "Meri";

})();
