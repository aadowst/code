package com.aadowst.chainOfResponsibility;

public class Authenticator extends Handler {

	public Authenticator(Handler next) {
		super(next);
	}

	@Override
	public boolean doHandle(HttpRequest request) {
		boolean isValid = (request.getUsername() == "admin" && request.getPassword() == "1234");
		System.out.println("Authenticated = " + isValid);
		return !isValid;  // a valid request will return false, which means the next Handler will receive the class
	}


}
