import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Uses the restaurant price bracket to return the max allowed price for each dish
function getMaxPrice(priceBracket: PriceBracket): number {
  if (priceBracket === PriceBracket.Low) return 10.0;
  else if (priceBracket === PriceBracket.Medium) return 20.0;
  return 30.0;
}
/// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
  let filterPrice: number = getMaxPrice(price);
  let filteredOrders: Order[][] = [];
	// for each element in the array (i.e. a restaurant's menu), filters out those above the max price. Pushes the resulting array into filtered orders (making it a 2d array)
  orders.forEach((element) => {
    let filteredElement = element.filter((order) => order.price <= filterPrice);
    filteredOrders.push(filteredElement);
  });
  return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], filteredOrders: Order[][]) {
  restaurants.forEach((element, index) => {
		// checks if there are items from a restaurant under the max price
    if (filteredOrders[index].length > 0) {
			// logs restaurant's name and eligible items
      console.log(element.name);
      filteredOrders[index].forEach((item) => {
        console.log(item.name)
      })
    }
  });
}

/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
console.log(elligibleOrders);
printOrders(restaurants, elligibleOrders);
