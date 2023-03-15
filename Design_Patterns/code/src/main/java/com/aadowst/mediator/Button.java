package com.aadowst.mediator;

public class Button extends UIControl{
	public Button(DialogBox owner) {
		super(owner);
	}

	public Boolean isEnabled;

	public Boolean getIsEnabled() {
		return isEnabled;
	}

	public void setIsEnabled(Boolean isEnabled) {
		this.isEnabled = isEnabled;
		owner.changed(this);
	}
}
