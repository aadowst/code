package com.aadowst.command.exercise;

public class ContrastCommand extends AbstractUndoableCommand{
	private float prevContrast;
	private float contrast;

	public ContrastCommand(VideoEditor videoEditor, VideoHistory history, float contrast) {
		super(videoEditor, history);
		prevContrast = videoEditor.getContrast();
		this.contrast = contrast;
	}

	@Override
	protected void doExecute() {
		videoEditor.setContrast(contrast);
	}

	public void unexecute(){
		videoEditor.setContrast(prevContrast);
	}

}
