package com.aadowst.chainOfResponsibility.exercise;

public class ExcelSpreadsheet extends DataReader{

	@Override
	protected void doRead(String fileName) {
		System.out.println("Reading data from Excel spreadsheet");
		
	}

	@Override
	protected String getExtension() {
		return ".xls";
	}


	
}
