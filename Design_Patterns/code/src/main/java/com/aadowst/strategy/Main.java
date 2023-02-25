package com.aadowst.strategy;


public class Main {
	public static void main(String[] args) {
		ImageStorage imageStorage = new ImageStorage(new JpgCompressor(), new BWFilter());
		imageStorage.store("file 1");
	}
}
