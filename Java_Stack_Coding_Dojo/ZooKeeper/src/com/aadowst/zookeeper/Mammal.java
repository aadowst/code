package com.aadowst.zookeeper;

public class Mammal {
	protected int energy;
	
	public Mammal() {
		energy = 100;
	}

	
	public int displayEnergy() {
		System.out.println(energy);
		return energy;
	}
	public int getEnergy() {
		return energy;
	}

	public void setEnergy(int energy) {
		this.energy = energy;
	}
	
}
