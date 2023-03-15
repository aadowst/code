package com.aadowst.mediator;

public class ArticlesDialogBox extends DialogBox {
	private ListBox articlesListBox = new ListBox(this);
	private TextBox titleTextBox = new TextBox(this);
	private Button saveButton = new Button(this);

	public void simulateUserInteraction(){
		articlesListBox.setSelection("Article 1");
		System.out.println("Text Box: " + titleTextBox.getContent());
		System.out.println("Button: " + saveButton.isEnabled);
	}

	@Override
	public void changed(UIControl control) {
		if (control == articlesListBox)
			articleSelected();
		else if (control == titleTextBox)
			titleChanged();
		else if (control == saveButton)
			saveClicked();
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
