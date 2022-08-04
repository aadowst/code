package com.aadowst.zookeeper;

public class Bat extends Mammal{

	public Bat() {
		super();
		this.energy =300;
	}

	public void fly() {
		System.out.println("flap, flap, flap");
		energy -= 50;
	}
	
	public void eatHumans() {
		energy += 25;
	}

	public void attackTown() {
		System.out.println("ahhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
		energy -= 100;
	}
}
