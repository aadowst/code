package com.aadowst.command.exercise;

public class TitleCommand extends AbstractUndoableCommand{
	private String title;

	public TitleCommand(VideoEditor videoEditor, VideoHistory history, String title) {
		super(videoEditor, history);
		this.title = title;
	}

	@Override
	protected void doExecute() {
		videoEditor.setText(title);
		
	}

	@Override
	public void unexecute() {
		videoEditor.removeText();
		
	}
	
}
