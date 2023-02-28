package com.aadowst.command.exercise;

public interface UndoableCommand extends Command{
	void unexecute();
}
