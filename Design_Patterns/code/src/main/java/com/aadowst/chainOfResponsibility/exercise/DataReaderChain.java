package com.aadowst.chainOfResponsibility.exercise;

public class DataReaderChain {
	public static DataReader getDataReaderChain(){
		ExcelSpreadsheet excelReader = new ExcelSpreadsheet();
		QuickbooksSpreadsheet quickbookReader = new QuickbooksSpreadsheet();

		quickbookReader.setNext(excelReader);

		return quickbookReader;
	}
	
}
