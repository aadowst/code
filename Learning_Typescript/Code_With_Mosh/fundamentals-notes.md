
_The Any Type_

Variables that are declared without a type && without being assigned are of any type
variables and functions can be explicitly typed with any (will turn off error messages, but defeats the point of TS)
Or, to turn off all errors with implicit any, go to tsconfig.json and under Type Checking, uncomment noImplicitAny and set it to false (this is the nuclear option)

_Arrays_

Can set the types of all elements of an array with <Type>[] (esp. important if defining an empty array)
```
Ex:  let numbers: number[];
```

_Tuples_

Fixed length array with defined types for each element
```
Ex:  let user: [number, string] = [1, "Adrian"]
```
However, there is a glitch with TS that allows new elements to be pushed to the tuple after it's been created

_Enums_
List of related concepts
Uses PascalCase
Defaults to zero-based ordering, but this can be explicity overrriden.

	a. Each element can be assigned an explicit value

	b. If one element is assigned a value, TS will sequentially number each subsequent element

	c. Strings can also be used as values. Each element will need to be assigned a value.

Setting an enum as const will make the outputted JS less verbose, but it is optional

Examples:
```
enum Rankings {First = 1, Second, Third}
const enum Size {Small = "SMALL", Medium="MEDIUM", Large="LARGE"}
```

Variables can be set to the type of the enum. 
Example:
```
let mySize: Size = Size.Medium
```

_Functions_

Best to explicitly state the return type after the parameters section to get runtime compiler errors
In tsconfig.json, under Type Checking, comment in:

	a. noUnusedLocals (make sure all variables declared in the fn are used)

	b. noUnusedParameters (make sure all parameters are used)

	c. noImplicitReturns (default is to return undefined)

	d. noImplicitAny (prevents compiler from inferring the any type; any needs to be explicitly declared)

To make a parameter optional, add ? before the colon
To provide a default, set it in the parameter signature (note:  type doesn't have to be explicitly declared, since it can be inferred from the default argument)
To 'skip' an optional parameter while providing an argument for another or for a paramter than has a default, write 'undefined' in the function call
Example:
```
function calculateTax(income: number, taxYear?: number, dependents = 0): number {
	const adjustedIncome = income - (5000 * dependents)
	if(taxYear && taxYear < 2022) return adjustedIncome * 1.2
	return adjustedIncome * 1.3
}
console.log(calculateTax(80000, undefined, 2))
```

_Objects_

The type of an object can be inferred if it is assigned when it is initialized
Or, it can be declared with the type explicitly stated
To make a value of an object uneditible, declare it to be readonly in the type definition
If there are methods associated with an object, their signatures need to be defined
Example:
```
let employee : {
	readonly id: number;
	name: string;
	retire:  (date: Date) => void;
} = {
  id: 1,
  name: "Adrian",
  retire: (date: Date) => {
    console.log(date);
  },
};
```
