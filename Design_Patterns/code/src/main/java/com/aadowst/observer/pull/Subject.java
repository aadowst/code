package com.aadowst.observer.pull;

import java.util.ArrayList;
import java.util.List;

// Observable
public abstract class Subject {
	private List<PullObserver> observers = new ArrayList<>();

	public void addObserver(PullObserver observer){
		observers.add(observer);
	}
	public void removeObserver(PullObserver observer){
		observers.remove(observer);
	}

	public void notifyObservers(){
		for (PullObserver observer : observers)
			observer.update();
	}
}
