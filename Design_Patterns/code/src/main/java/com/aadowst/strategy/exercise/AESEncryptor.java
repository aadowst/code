package com.aadowst.strategy.exercise;

public class AESEncryptor implements Encryptor {
	public String encrypt(String message){
		System.out.println("Encrypting message using AES");
		return "Encrypted Message";
	}
}
