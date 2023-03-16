package com.aadowst.chainOfResponsibility;

public class Main {
	public static void main(String[] args) {
		// authenticator ->  logger -> compressor
		Compressor compressor = new Compressor(null);
		Logger logger = new Logger(compressor);
		Authenticator authenticator = new Authenticator(logger);

		WebServer server  = new WebServer(authenticator);
		server.handle(new HttpRequest("admin", "123"));
		server.handle(new HttpRequest("admin", "1234"));

		// chain excludes the authenticator, but includes the encryptor
		Encryptor encryptor = new Encryptor(compressor);
		Logger logger2 = new Logger(encryptor);
		WebServer server2 = new WebServer(logger2);
		server2.handle(new HttpRequest("badUser", "wrong"));  // since authenticator bypassed, invalid requests allowed
	}
}
