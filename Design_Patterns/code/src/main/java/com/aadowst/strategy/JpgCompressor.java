package com.aadowst.strategy;

public class JpgCompressor implements Compressor{

	@Override
	public void compress(String fileName) {
		System.out.println("Compressing " + fileName + " using JPEG");
	}
	
}
