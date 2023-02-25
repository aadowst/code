package com.aadowst.strategy.exercise;

public class DESEncryptor implements Encryptor{
	public String encrypt(String message){
		System.out.println("Encrypting message using DES");
		return "Encrypted Message";
	}
}
