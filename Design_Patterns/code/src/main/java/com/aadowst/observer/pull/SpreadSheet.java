package com.aadowst.observer.pull;

public class SpreadSheet implements PullObserver {
	private DataSource dataSource;

	public SpreadSheet(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	@Override
	public void update() {
		System.out.println("Spreadsheet got notified of value: " +  dataSource.getValue());
		
	}
	
}