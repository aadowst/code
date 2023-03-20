package com.aadowst.visitor.exercise;

public class FormatSegment implements Segment {

	@Override
	public void applyFilter(AudioFilter operation) {
		operation.apply(this);
		
	}
}
