package com.aadowst.state.exercise;

public class DirectionService {
	private Travel travelMode;

	public DirectionService(Travel travelmode){
		this.travelMode = travelmode;
	}

	public Object getEta() {
		return travelMode.getEta();
	}

	public Object getDirection() {
		return travelMode.getDirection();
	}

	public Travel getTravelMode() {
			return travelMode;
	}

	public void setTravelMode(Travel travelMode) {
			this.travelMode = travelMode;
	}
}
