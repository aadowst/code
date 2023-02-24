package com.aadowst.iterator.exercise;

import java.util.ArrayList;
import java.util.List;

public class ProductCollection {
  private List<Product> products = new ArrayList<>();

  public ProductIterator createIterator(){
    return new ProductIterator(this);
  }

  public void add(Product product) {
    products.add(product);
  }

  public Product remove(){
    int lastIndex = products.size() - 1;
    Product lastProduct = products.get(lastIndex);
    products.remove(lastProduct);
    return lastProduct;
  }

  public class ProductIterator implements Iterator<Product>{
    private ProductCollection collection;
    private int index;

    public ProductIterator(ProductCollection collection){
      this.collection = collection;
    }

    @Override
    public boolean hasNext() {
      return (index < collection.products.size());
    }

    @Override
    public Product current() {
      return collection.products.get(index);
    }

    @Override
    public void next() {
      index++;
    }

  }
}
