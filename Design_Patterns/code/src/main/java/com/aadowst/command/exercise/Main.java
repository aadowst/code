package com.aadowst.command.exercise;

public class Main {
	public static void main(String[] args) {
		VideoEditor videoEditor = new VideoEditor();
		VideoHistory history = new VideoHistory();

		TitleCommand titleCommand = new TitleCommand(videoEditor, history, "Hello World");
		titleCommand.execute();
		System.out.println("Title:  " + videoEditor);
		
		ContrastCommand contrastCommand = new ContrastCommand(videoEditor, history, 0);
		contrastCommand.execute();
		System.out.println("Contrast:  " + videoEditor);
		
		UndoCommand undoCommand = new UndoCommand(history);
		undoCommand.execute();
		System.out.println("Undo:  " + videoEditor);
		undoCommand.execute();
		System.out.println("Undo:  " + videoEditor);
		undoCommand.execute();
		System.out.println("Undo:  " + videoEditor);


	}
}
