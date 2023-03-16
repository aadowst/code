package com.aadowst.chainOfResponsibility.exercise;

public abstract class Spreadsheet {
	private String fileName;
	private int[] data;
	
	public Spreadsheet(String fileName, int[] data) {
		this.fileName = fileName;
		this.data = data;
	}

	public String getFileName() {
		return fileName;
	}

	public int[] getData() {
		return data;
	}
	
}
