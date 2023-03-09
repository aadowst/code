package com.aadowst.observer.exercise;

import java.util.ArrayList;
import java.util.List;

public class StockList {
	private List<Stock> stocks = new ArrayList<>();

	public StockList(List<Stock> stocks){
		this.stocks = stocks;
	}

	public void addStock(Stock stock) {
		stocks.add(stock);
	}

	public void removeStock(Stock stock){
		stocks.remove(stock);
	}

	public List<Stock> showStocks(){
		return this.stocks;
	}

}
