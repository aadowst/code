package com.aadowst.mediator;

public class ListBox extends UIControl{
	public ListBox(DialogBox owner) {
		super(owner);
	}

	private String selection;

	public String getSelection() {
		return selection;
	}

	public void setSelection(String selection) {
		this.selection = selection;
		owner.changed(this);
	}
}
