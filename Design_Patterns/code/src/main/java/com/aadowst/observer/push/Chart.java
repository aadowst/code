package com.aadowst.observer.push;

public class Chart implements PushObserver{

	@Override
	public void update(int value) {
		System.out.println("Chart got updated with value: " + value);
		
	}
	
}
