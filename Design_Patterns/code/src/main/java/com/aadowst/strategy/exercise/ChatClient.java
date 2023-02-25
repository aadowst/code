package com.aadowst.strategy.exercise;

public class ChatClient {
    public void send(String message, Encryptor encryptor) {
    encryptor.encrypt(message);
    System.out.println("Sending the encrypted message...");
    }
}
