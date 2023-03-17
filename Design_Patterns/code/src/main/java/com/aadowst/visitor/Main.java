package com.aadowst.visitor;

public class Main {
	public static void main(String[] args) {
		HtmlDocument document = new HtmlDocument();
		AnchorNode namedAnchor = new AnchorNode();
		document.add(namedAnchor);
		document.add(new HeadingNode());
		document.add(new AnchorNode());
		document.execute(new HighlightOperation());
		document.execute(new PlainTextOperation());
	}
}
