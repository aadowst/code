package com.aadowst.command.editor;

public interface UndoableCommand extends Command{
	void unexecute();
}
