(function () {
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterCtrl', CounterCtrl);

  CounterCtrl.$inject = ['$scope', '$timeout'];
  function CounterCtrl($scope, $timeout) {
    $scope.oneCounter = 0;
    $scope.counter = 0;
          $scope.showNumberOfWatchers = function () {
          console.log('Number of Wath',$scope.$$watchersCount);
          };
          $scope.countOnce = function (){
            $scope.oneCounter = 1;
          };
          $scope.upCounter = function () {
            $timeout(function (){
              $scope.counter++;
              console.log("Counter incremented!");
            }, 2000);
          };

          $scope.$watch(function () {
            console.log("Digest lop fierd!")
          });

      };

})();
