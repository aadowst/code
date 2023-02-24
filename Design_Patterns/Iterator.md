If one class needs to iterate over the contents of another class, it shouldn't need to know the business logic of the other class (e.g. whether data is stored in an ArrayList or a fixed-length List or a stack or a queue)
The internal structure of each class should be encapsulated
Outside classes should be able to call current() and next() methods of a class w/o knowing what's going on under the hood in the other class
However, the current() and next() methods are an additional responsibilty, so they should be outsourced to an iterator class
There might be multiple types of iterators (list vs. array vs. queue), which might need to be swapped out
Since all iterator classes have the same requirements, there should be an interface that defines the methods
Since the return type of current() might differ, depending on implementation, a generic type should be used in the iterator class
The class that implements the iterator will do so through a nested class