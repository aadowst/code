var pizzasCooked = 0;
var pizzaList = [];
function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    pizzasCooked++
    pizzaList.push(pizza);
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var pizza3 = pizzaOven("Sicilian", "white sauce", "4 cheese blend", "sausage");
var pizza4 = pizzaOven("almond flour", "garlic sauce", "no cheese", "ham");
console.log(pizzasCooked);





var pizzaListItem ="";
for (let i = 0; i < pizzasCooked; i++ ){
    console.log(pizzaList[i]);
}
console.log(pizzaList);

