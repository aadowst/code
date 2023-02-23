Reference:  https://www.javatpoint.com/memento-pattern

A memento patter is useful for making an undo button in an app. This button would revert changes made (in reverse order)
Originator:  the primary class
Memento:  makes state objects of the primary class(i.e. objects that represent the current state)
Caretaker:  class stores the past state objects(s) of the primary class

Single responsibility principle:  each class does one thing

The primary class depends on the memento class to make state objects
The caretaker class is composed of the memento class (because it stores a list of the objects)

