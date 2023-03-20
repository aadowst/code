package com.aadowst.visitor.exercise;

public class NormalizeFilter implements AudioFilter {

	@Override
	public void apply(FactSegment factSegment) {
		System.out.println("Normalizing");
		
	}

	@Override
	public void apply(FormatSegment formatSegment) {
		System.out.println("Normalizing");
		
	}
	
}
