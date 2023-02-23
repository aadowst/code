The program needs to know about previous actions/inputs to determine how it should interpret current input
The program should reference an abstract class for all of its business logic
The abstract class can be implemented by multiple child classes, each with its own function. 
Changing or adding a child class shouldn't affect the main class, since it only interacts with the abstract class

In Gang of Four book and another sources, the following terms are used:
	Context:  the main class, which has a request method
	State:  the abstract parent class, which has a handle method
	ConcreteStateA, ConcreteStateB, etc:  the child classes that implement the State class (each with its own handle method)

Abusing the state pattern