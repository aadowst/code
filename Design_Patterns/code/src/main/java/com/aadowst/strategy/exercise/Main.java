package com.aadowst.strategy.exercise;

public class Main {
	public static void main(String[] args) {
		ChatClient chatClient = new ChatClient();
		chatClient.send("hello", new AESEncryptor());
	}
}
