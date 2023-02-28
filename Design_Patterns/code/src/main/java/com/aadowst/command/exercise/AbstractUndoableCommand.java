package com.aadowst.command.exercise;

public abstract class AbstractUndoableCommand implements UndoableCommand {
	protected VideoEditor videoEditor;
	protected VideoHistory history;

	public AbstractUndoableCommand(VideoEditor videoEditor, VideoHistory history) {
		this.videoEditor = videoEditor;
		this.history = history;
	}

	@Override
	public void execute(){
		doExecute();
		history.push(this);
	}

	protected abstract void doExecute();
}
