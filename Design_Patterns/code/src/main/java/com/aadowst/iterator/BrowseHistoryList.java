package com.aadowst.iterator;

public class BrowseHistoryList {
	private String[] urls = new String[10];
	private int count = 0;

	public Iterator createIterator(){
		return new ArrayIterator(this);
	}

	public void push(String url){
		urls[count++] = url;
	}

	public String pop(){
		return urls[--count];
	}

	public class ArrayIterator implements Iterator{
		private BrowseHistoryList history;
		private int index;
		
		public ArrayIterator(BrowseHistoryList history) {
			this.history = history;
		}
		@Override
		public boolean hasNext() {
			return (index < history.count);
		}

		@Override
		public String current() {
		return history.urls[index];	
		}

		@Override
		public void next() {
				index++;
		}
		
	}
}
