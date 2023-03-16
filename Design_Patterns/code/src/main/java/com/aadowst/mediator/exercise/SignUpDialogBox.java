package com.aadowst.mediator.exercise;

public class SignUpDialogBox {
	private Button signUpButton = new Button();
	private CheckBox agreeCheckBox = new CheckBox();
	private TextBox usernameTextBox = new TextBox();
	private TextBox passwordTextBox = new TextBox();

	public SignUpDialogBox() {
		signUpButton.addEventHandler(this::buttonClicked);
		agreeCheckBox.addEventHandler(this::controlChanged);
		usernameTextBox.addEventHandler(this::controlChanged);
		passwordTextBox.addEventHandler(this::controlChanged);
	}

	public void buttonClicked(){
		if(signUpButton.isEnabled()){
			// submit to server
		}
	}

	public void controlChanged(){
		signUpButton.setEnabled(isFormValid());
	}

	public boolean isFormValid(){
		return agreeCheckBox.isChecked() && !usernameTextBox.isEmpty() && !passwordTextBox.isEmpty();
	}
}
