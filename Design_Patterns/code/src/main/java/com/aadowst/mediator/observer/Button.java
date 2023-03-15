package com.aadowst.mediator.observer;

public class Button extends UIControl {

	public Boolean isEnabled;

	public Boolean getIsEnabled() {
		return isEnabled;
	}

	public void setIsEnabled(Boolean isEnabled) {
		this.isEnabled = isEnabled;
		notifyEventHandlers();
	}
}
