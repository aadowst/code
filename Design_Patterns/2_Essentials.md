Topics:
	Getting Started
	Classes
	Coupling
	Interfaces
	Encapsulation
	Abstraction
	Inheritance
	Polymorphismn
	UML

_Getting Started_
the package in Java is equivalent to the namespace in C#
the name of the file must match the the name of the class
classes begin with a main method
static means method can be called directly (don't have to instantiate it)

_Classes_
Fields are attributes of the class
Methods are functions the class performs
A constuctor is a special method that creates a new instance of a class

_Coupling_
Coupling refers to how dependent one class is one another. Potential issues:
	changes in one could cause bugs in the other, if not addressed
	all coupled classes need to be recompiled (even if there aren't breaking changes)

_Interfaces_
Interfaces is a contract that specifies the capabilities a class should provide
They help provide loosely-coupled connections between classes
Interfaces don't have a body (just a signature)
Classes implement interfaces, using implements keyword. They must have all fields/methods specified in the interface
In the rest of the app, programming should be to the interface (rather than a specific class that implements it)

4 Principles of OOP

_Encapsulation_
Bundle the data and associated methods within a class. 
Outside classes are only allowed to call methods of the class (set access modifiers of fields to private)

_Abstraction_
Reduce complexity by hiding unneccessary details (set access modifiers of methods to private, if they're implementation details)

_Inheritance_
Inheritance is a mechanism for reusing code across classes
Parent (aka base) class has the code and the children inherit it 

_Polymorphism_
An object can take on many different forms
Some parent classes can be marked as abstract (and have abstract methods), because implementations in different child classes wil be different

_UML_
Unified Modeling Language is a way to model classes
Class name put at top
Fields are put in the middle. 
	Their type is specified after a colon
Methods are put on the bottom.
	paramenters and their types in parentheses
	return type is specified after the colon
Access Modifiers:
- sign before a field/method indicates a private access
+ sign before a field/method indicates a public access

Relationships:
Inheritance/extension:  An arrow goes from a child class from a parent class (arrow head should be empty)
Composition: indicated with an arrow with a diamond on the back end (the class with a diamond is composed of the class pointed to by the arrow) (e.g. the car class is composed of the wheel class, since cars have 4 wheels)
Dependency:  a dashed arrow goes from a class to another class that it refers to/depends on