var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number array:", numberArray);

function abovefFilter(value) {
    return value > 5;
}
var filteredNumberArray =  numberArray.filter(abovefFilter);
console.log("Filtered  number array:", filteredNumberArray);

var shoppingList = [
  "Milk","Donuts","Cookies","Chocolate","Peanut Butter","Pepto Butter",
  "Pepto Bismol","Pepto Cookie flavor Bismol"
];

console.log("Shopping list:", shoppingList);

var searchValue = "Bismol";
function containsFilter(value) {
  return value.indexOf(searchValue) !== -1;
}

var searchedShoppingList  = shoppingList.filter(containsFilter);
console.log("Searched Shopping List:", searchedShoppingList);
