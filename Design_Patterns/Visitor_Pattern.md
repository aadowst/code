Allows us to add new operations to an object without modifying its structure

Operation is represented as an interface with method overloading (to apply different methods to a node based on its type)
Concrete operations will implement the interface. All of the logic for each operation will be in the concrete operation
The solution works only if the object structure is stable (because the interface has a method for each existing operation). Adding a new object would require the interface and all concrete operations to be updated

In the GoF book, they use the terms:
	visitor for the operation, which has an overloaded visit method signature
	element for interface that depends on the visitor, which has an accept method signature
	concrete elements for classes that implement the element interface and have accept methods