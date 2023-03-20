package com.aadowst.visitor.exercise;

public class FactSegment implements Segment {

	@Override
	public void applyFilter(AudioFilter operation) {
		operation.apply(this);
		
	}
}
