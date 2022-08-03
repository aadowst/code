package com.aadowst.zookeeper;

public class Gorilla extends Mammal{

	public Gorilla() {
//		super();

	}
	public void throwSomething() {
		System.out.println("Gorilla threw something");
		energy -= 5;
	}
	
	public void eatBananas() {
		System.out.println("yum yum");
		energy += 10;
	}
	
	public void climb() {
		System.out.println("Gorilla climbed a tree");
		energy -= 5;
	}

	
}
