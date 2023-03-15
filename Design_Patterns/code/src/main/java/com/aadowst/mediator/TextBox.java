package com.aadowst.mediator;

public class TextBox extends UIControl{
	public TextBox(DialogBox owner) {
		super(owner);
	}

	private String content;

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
		owner.changed(this);
	}
	
}
