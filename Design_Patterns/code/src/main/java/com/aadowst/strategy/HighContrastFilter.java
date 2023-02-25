package com.aadowst.strategy;

public class HighContrastFilter implements Filter {
	public void apply(String fileName){
		System.out.println("Applying high contrast filter to " + fileName);
	}
}
