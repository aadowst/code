package com.aadowst.chainOfResponsibility.exercise;

public class QuickbooksSpreadsheet extends DataReader{

	@Override
	protected void doRead(String fileName) {
		System.out.println("Reading data from a Quickbooks spreadsheet");
		
	}

	@Override
	protected String getExtension() {
		return ".qbw";
	}


	
}
