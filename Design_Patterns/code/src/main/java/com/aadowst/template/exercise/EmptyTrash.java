package com.aadowst.template.exercise;

public class EmptyTrash extends Window{

	@Override
	protected void onClosed() {
		System.out.println("Emptying trash");
	}
	
}
