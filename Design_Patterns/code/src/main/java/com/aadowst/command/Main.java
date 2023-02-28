package com.aadowst.command;

import com.aadowst.command.fx.Button;

public class Main {
	public static void main(String[] args){
		CustomerService service = new CustomerService();
		AddCustomerCommand command = new AddCustomerCommand(service);
		Button button = new Button(command);
		button.click();

		CompositeCommand compositeCommand = new CompositeCommand();
		compositeCommand.add(new BlackAndWhiteCommand());
		compositeCommand.add(new ResizeCommand());
		compositeCommand.execute();
	}
}
