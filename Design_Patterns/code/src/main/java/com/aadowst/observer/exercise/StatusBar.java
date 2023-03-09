package com.aadowst.observer.exercise;

import java.util.ArrayList;
import java.util.List;

public class StatusBar implements Observer{
    private List<Stock> stocks = new ArrayList<>();

    public void addStock(Stock stock){
        stocks.add(stock);
        stock.addObserver(this);
    }
    
    public void show() {
        for (Stock stock : stocks)
        System.out.println(stock);
    }

    @Override
    public void update(){
        System.out.println("Updating prices");
        show();
    }
}
