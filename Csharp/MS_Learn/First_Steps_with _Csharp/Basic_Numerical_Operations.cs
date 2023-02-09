// Using mixed data types forces implicit type conversions

string firstName = "Adrian";
int widgetsSold = 7;
Console.WriteLine(firstName + " sold" + widgetsSold + " widgets.");  // "Adrian sold 7 widgets."
Console.WriteLine(firstName + " sold" + widgetsSold + 7 + " widgets.");  // "Adrian sold 77 widgets."
Console.WriteLine(firstName + " sold" + (widgetsSold + 7) + " widgets.");  // "Adrian sold 14 widgets."

// when performing division, make sure to type quotient correctly, so if answer needs decimal places, it will have them
// integers truncat to whole digit
// decimals use decimals, if necessary, to avoid truncation (and extra decimal places can be retained, if present in divisand/divisor)
// doubles use up to the number of decimals in divisand/divisor, but less if possible

int intQuotient = 9/5;
Console.WriteLine(intQuotient);  // 1

decimal decimalQuotient = 9m/5;
decimal decimalQuotientThreeDecimals = 9.000m/5;
Console.WriteLine(decimalQuotient); // 1.8
Console.WriteLine(decimalQuotientThreeDecimals); // 1.800

double doubleQuotient = 9/5;
double doubleQuotientOneDecimal = 9.0/5;
double doubleQuotientThreeDecimals = 9.000/5;
Console.WriteLine(doubleQuotient); // 1
Console.WriteLine(doubleQuotientOneDecimal); // 1.8
Console.WriteLine(doubleQuotientThreeDecimal); // 1.8

// if divisor and divisand are both ints, but quotient should be decimal, typecast one or both in the expression

	// without typecasting
int first = 7;
int second = 5;
decimal quotient = first / second;
Console.WriteLine(quotient);  // 1

	// with typecasting
int first = 7;
int second = 5;
decimal quotient = (decimal) first / second;
Console.WriteLine(quotient);  // 1.4

int first = 7;
int second = 5;
decimal quotient = first / (decimal) second;
Console.WriteLine(quotient); // 1.4

int first = 7;
int second = 5;
decimal quotient = (decimal) first / (decimal) second;
Console.WriteLine(quotient); // 1.4

// C# does not have an exponent operator. Instead, the System.Math.Pow() method is used from the .NET Class Library

// To increment, the += or ++ operators are used
// To decrement, the -= or -- operators are used
// Multiplication also has a compound operator:  *=

// The order of increment and decrement operators matter
	// value++ will increment after the value is retrieved
	// ++value will increment before the value is retrieved

int value = 1;
value++;
Console.WriteLine("First: " + value);  // 2
Console.WriteLine("Second: " + value++); // 2 (incremented after written)
Console.WriteLine("Third: " + value); // 3
Console.WriteLine("Fourth: " + (++value)); // 4 (incremented before being written). Note that parentheses are added for readability, but aren't required

// Challenge
int fahrenheit = 94;  // convert to Celsius and then console

	// Solution 1:
decimal celsius = ( (decimal)fahrenheit - 32) * 5/9;
Console.WriteLine($"The temperature is {celsius} Celsius.");

	// Solution 2:
decimal celsius = (fahrenheit - 32m) * (5m / 9m);
Console.WriteLine("The temperature is " + celsius + " Celsius.");