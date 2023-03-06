Pattern used in situation when the state of the app changes and other objects need to be notified about the change
The programmer won't know how other objects will use the updated info
The DataSource class maintains a list of obervers, which it can update and notifiy
It is also know as a publish/subscribe pattern

In the GoF, there are the following classes:
Concrete Subject:  the class that extends the Subject
Subject:  an abstract class that maintains the attach, detach and notify methods
Observer: an interface which has an update method
Concrete Observer:  a class that implements the observer class

Push Style of Communication.  The subject pushes the changes to the observers. However, different implementations in the concrete observers may require different data, which could lead to complications in coding the observer. This style is not very flexible

Pull Style of Communication. The observers pull the data they need from the concrete subjects, which they compose. This creates coupling, but the direction of coupling is ok (the observer is allowed to depend on the subject that it's observing)