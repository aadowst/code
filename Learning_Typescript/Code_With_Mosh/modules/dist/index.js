import { Square, Circle as MyCircle } from "./shapes";
import calculateTax from "./tax";
let circle = new MyCircle(1);
console.log(circle.radius);
let square = new Square(2);
console.log(square.width);
let tax = calculateTax(1000);
console.log(tax);
