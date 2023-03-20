package com.aadowst.visitor.exercise;

public class NoiseReductionFilter implements AudioFilter {

	@Override
	public void apply(FactSegment factSegment) {
		System.out.println("Reducing Noise");
		
	}

	@Override
	public void apply(FormatSegment formatSegment) {
		System.out.println("Reducing Noise");
		
	}
	
}
