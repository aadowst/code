package com.aadowst.strategy;

public class BWFilter implements Filter {
	public void apply(String fileName){
		System.out.println("Applying B&W filter to " + fileName);
	}
}
