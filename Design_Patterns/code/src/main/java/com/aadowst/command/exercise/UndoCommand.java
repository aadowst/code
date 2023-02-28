package com.aadowst.command.exercise;

public class UndoCommand implements Command{
	private VideoHistory history;

	
	public UndoCommand(VideoHistory history) {
		this.history = history;
	}


	@Override
	public void execute() {
		if (history.size() > 0)
			history.pop().unexecute();
		
	}
	
}
