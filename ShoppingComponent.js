(function () {
  'use strict';

var shoppingList1 = [
  "Milk","Donuts","Cookies","Chocolate","Peanut Butter","Pepto Butter",
  "Pepto Bismol","Pepto Cookie flavor"
];

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Peanut Butter",
    quantity: "22"
  },
];
  angular.module('ShoppingApp', [])
  .controller('ShoppingCtrl', ShoppingCtrl);

  ShoppingCtrl.$inject = ['$scope'];
  function ShoppingCtrl($scope) {
      $scope.shoppingList1 = shoppingList1;
      $scope.shoppingList2 = shoppingList2;

      $scope.addToList =  function () {
        var newItem = {
          name: $scope.newItemName,
          quantity: $scope.newItemQuantity,
        };

        $scope.shoppingList2.push(newItem);
      }

      };


})();
