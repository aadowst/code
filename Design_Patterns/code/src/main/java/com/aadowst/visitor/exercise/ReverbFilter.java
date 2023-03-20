package com.aadowst.visitor.exercise;

public class ReverbFilter implements AudioFilter{

	@Override
	public void apply(FactSegment factSegment) {
		System.out.println("Applying Reverb");
		
	}

	@Override
	public void apply(FormatSegment formatSegment) {
		System.out.println("Applying Reverb");
		
	}
	
}
