package com.aadowst.iterator;

public class Main {
	public static void main(String[] args) {
		BrowseHistoryList history = new BrowseHistoryList();
		history.push("a");
		history.push("b");
		history.push("c");
		history.push("d");
		history.push("e");
		history.push("f");
		history.push("g");
		history.push("h");
		history.push("i");
		history.push("j");
		history.push("k");
		history.push("l");
		history.push("m");

		Iterator iterator = history.createIterator();
		while (iterator.hasNext()){
			String current = iterator.current();
			System.out.println(current);
			iterator.next();
		}
	}
}
