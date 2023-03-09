package com.aadowst.observer.exercise;

import java.util.ArrayList;
import java.util.List;

public class Stock{
    private String symbol;
    private float price;
    private List<Observer> observers = new ArrayList<>();

    public Stock(String symbol, float price) {
        this.symbol = symbol;
        this.price = price;
    }

    public void addObserver(Observer observer){
		observers.add(observer);
	}

	public void removeObserver(Observer observer){
		observers.remove(observer);
	}

	public void notifiyObservers(){
		for (Observer observer : observers)
			observer.update();
	}

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "symbol='" + symbol + '\'' +
                ", price=" + price +
                '}';
    }

}
