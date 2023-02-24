package com.aadowst.state.exercise;

public class DrivingTravel implements Travel {
	private Object eta;
	private Object direction;

	@Override
	public Object getEta() {
		System.out.println("Calculating ETA (driving)");
		return eta;
	}

	@Override
	public Object getDirection() {
		System.out.println("Calculating Direction (driving)");
		return direction;
	}
	
}
