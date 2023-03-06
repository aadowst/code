package com.aadowst.observer.pull;

public class Chart implements PullObserver{
	private DataSource dataSource;

	public Chart(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	@Override
	public void update() {
		System.out.println("Chart got updated with value: " + dataSource.getValue());
		
	}
	
}

