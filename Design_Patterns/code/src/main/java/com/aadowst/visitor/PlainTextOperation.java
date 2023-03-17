package com.aadowst.visitor;

public class PlainTextOperation implements Operation{

	@Override
	public void apply(HeadingNode heading) {
		System.out.println("Heading to plain text");
		
	}

	@Override
	public void apply(AnchorNode anchor) {
		System.out.println("Anchor to plain text");
		
	}
	
}
