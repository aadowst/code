package com.aadowst.chainOfResponsibility;

public class Logger extends Handler{
	
	public Logger(Handler next) {
		super(next);
	}

	@Override
	public boolean doHandle(HttpRequest request) {
		System.out.println("Logged");
		return false;  // false means not at end of chain
	}
}
