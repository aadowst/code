package com.aadowst.memento;

public class Main {
	
	public static void main(String[] args){
		Editor editor = new Editor();
		History history = new History();

		editor.setContent("Test");
		history.push(editor.createState());

		editor.setFontName("Times");
		history.push(editor.createState());

		editor.setFontSize(20);
		System.out.println(editor.toString());
		editor.restore(history.pop());

		System.out.println(editor.toString());
	}
}
