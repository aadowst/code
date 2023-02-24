package com.aadowst.iterator.exercise;

import com.aadowst.iterator.exercise.ProductCollection.ProductIterator;

public class Main {
	public static void main(String[] args) {
		ProductCollection collection = new ProductCollection();
    collection.add(new Product(1, "a"));
    collection.add(new Product(2, "b"));
    collection.add(new Product(3, "c"));

    ProductIterator iterator = collection.createIterator();
    while (iterator.hasNext()) {
      System.out.println(iterator.current());
      iterator.next();
    }
	}
}
