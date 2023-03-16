Used where a pipeline (chain of objects) is needed to process a request
Example:  building a web server. A HTTP request requires multiple actions to be performed (authentication, logging, compression, etc.). Each task should be implemented inside a separate class. 
A poor approach would be for the webserver to instatiate objects of each class directly (leads to tight coupling between the webserver and the classes). 
A better approach would be to use an authenticator interface, which the webserver could program to, instead of a specific impelementation
A limitation with that approach is that we've hard-coded the order of operations (and we can't elect to skip any, if desired)

The chain of responsibilty method uses an abstract Handler class. Each extension of the Handler class knows what is after it in the chain. If it received a valid request, it will process it as appropriate and pass it along.

The webserver communicates with just the first handler in the chain

When instantiating handlers (e.g. in main method), put in reverse order, so each new object can point to what will follow it