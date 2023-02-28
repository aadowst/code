In the command pattern, a reusable class (e.g. a button that is clicked) uses a command interface that has an execute method. The reusable class simply calls the interface. When the interface is implemented in an app, the specific code that should be followed will be specified. The actual work is forwarded to the interface and its implementation

Terminology
Invoker:  the reusable class
Command:  the interface that has the execute method
Concrete Command:  and implementation of the interface (should have Command as its suffix)
Receiver:  the component of the app that uses the component

The invoker is decoupled from the receiver.
Other benefits:  since requests are being passed as command objects, they can be shared with other components of the code and used as arguments in other methods. For example, these commands can be stored in a log, so user actions can be replayed or undone

The invoker and the command interface should be stored in a framework subpackage ("fx"), since they are seperate from the other components of the app

The command pattern can be used to implement composite commands. A composite command implements the command interface and keeps a list of command objects. When the execute method of the composite command object is executed, it iterates over the commands in its list and calls each of their execute methods.

The command pattern also allows the ability to have undo mechanisms. This is done by implementing another interface UndoableCommand, which has an unexecute method. Concrete classes that implement both interfaces will have execute() and unexecute() methods

The memento pattern also allows for actions to be undone, but keeping a list of states of the app. However, it can be very expensive to do this storage, depending on how involved the state is (e.g. making videos in a video app). The command pattern and its undo functionality makes it easier, because objects know how to undo themselves. There also need to be a history object to keep track of a list of commands and their original states