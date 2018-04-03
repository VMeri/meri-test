(function () {
  'use strict';

  angular.module('BindingApp', [])
  .controller('BindingCtrl', BindingCtrl);

  BindingCtrl.$inject = ['$scope'];
  function BindingCtrl($scope) {
      $scope.firstName = "Meri";


      $scope.showNumberOfWatchers = function () {
        console.log("# of watchers",$scope.$$watchersCount);
      };
      $scope.setFullName = function (){
        $scope.fullName = $scope.firstName + " " + "Velko";
      };
      $scope.logFirstName = function () {
        console.log("First name is:",$scope.firstName);
      };
      $scope.logFullName = function () {
        console.log("Full name is:",$scope.fullName);
      };
      };


})();
