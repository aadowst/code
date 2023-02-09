// .NET class library is a collection of thousands of classes containing tens of thousands of methods
// A namespace is a family name for a type. Namespaces are used to avoid collisions between names of classes (i.e. the same class name can be used in different namespaces)

// Calling methods has a common format:  ClassName.MethodName(parameters)  (the . is called the member access operator and () is called the method invocation operator)
// Instances of class can be instatiated using the new operator (note: the instance needs to be typed)
// Before accessing stateful methods, an class object needs to be instantiated.

Random dice = new Random()
int roll = dice.Next(1,7)  // a stateful (aka instance) method
Console.WriteLine(roll)  // a stateless (aka static) method

// Overloading methods is a way to handle different inputs

// Challenge:  use Intellisense to determine a method and call it to find the maximum value in a pair

	// Solution:

int firstValue = 500;
int secondValue = 600;
int largerValue = Math.Max(firstValue, secondValue);

Console.WriteLine(largerValue);