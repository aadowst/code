package com.aadowst.observer.push;

public class SpreadSheet implements PushObserver {

	@Override
	public void update(int value) {
		System.out.println("Spreadsheet got notified of value: " + value);
		
	}
	
}
