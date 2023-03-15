package com.aadowst.mediator.observer;

public interface EventHandler {
	void handle();
}

// represented as a lambda expression (the lambda operator is the arrow in the middle, which separates the parameter list from the body of the method)
// () -> {}