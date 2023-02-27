package com.aadowst.template.exercise;

public class SaveData extends Window {

	@Override
	protected void onClosing() {
		System.out.println("Please save before exiting");
	}
	
}
