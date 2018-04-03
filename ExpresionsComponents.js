(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgCtrl', DICtrl)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);

  DICtrl.$inject = ['$scope', 'lovesFilter'];
  function DICtrl($scope, lovesFilter) {
    $scope.name = "Meri";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = .45;

    $scope.sayMessage = function () {
      var msg = "Message likes message likes assas healthy!!!";
      return msg;
    };

    $scope.sayLovesMessage = function () {
      var msg = "Message likes message likes assas healthy!!!";
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.feed = function () {
      $scope.stateOfBeing = "fed";
    };
};

function LovesFilter () {
  return function(input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  }
};

function TruthFilter() {
  return function(input, target, replace) {
    input = input || "";
    input = input.replace("target", "replace");
    return input;
  }
}
})();
