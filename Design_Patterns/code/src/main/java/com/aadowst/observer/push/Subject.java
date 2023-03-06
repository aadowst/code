package com.aadowst.observer.push;

import java.util.ArrayList;
import java.util.List;

// Observable
public abstract class Subject {
	private List<PushObserver> observers = new ArrayList<>();

	public void addObserver(PushObserver observer){
		observers.add(observer);
	}
	public void removeObserver(PushObserver observer){
		observers.remove(observer);
	}

	public void notifyObservers(int value){
		for (PushObserver observer : observers)
			observer.update(value);
	}
}
