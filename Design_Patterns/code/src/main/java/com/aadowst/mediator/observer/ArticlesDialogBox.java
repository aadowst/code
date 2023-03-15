package com.aadowst.mediator.observer;

public class ArticlesDialogBox {
	private ListBox articlesListBox = new ListBox();
	private TextBox titleTextBox = new TextBox();
	private Button saveButton = new Button();



	public ArticlesDialogBox() {
		articlesListBox.addEventHandler(this::articleSelected);
		titleTextBox.addEventHandler(this::titleChanged);
		saveButton.addEventHandler(this::saveClicked);
	}


	public void simulateUserInteraction(){
		articlesListBox.setSelection("Article 1");
		System.out.println("Text Box: " + titleTextBox.getContent());
		System.out.println("Button: " + saveButton.isEnabled);
	}


	private void articleSelected(){
		titleTextBox.setContent(articlesListBox.getSelection());
		saveButton.setIsEnabled(true);
	}

	private void titleChanged(){
		String content = titleTextBox.getContent();
		boolean isEmpty = (content == null || content.isEmpty());
		saveButton.setIsEnabled(!isEmpty);
	}

	private void saveClicked(){
		// save to db
		titleTextBox.setContent(null);
		saveButton.setIsEnabled(false);
	}
	
}
