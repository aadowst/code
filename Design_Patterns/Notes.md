A functional interface is an interface with a single method (i.e. it behaves more like a function than a class which has many attributes)

A lambda expression is a shorthand for a function

Anonymous Inner Class
```java
public class ArticlesDialogBox {
	private ListBox articlesListBox = new ListBox();
	private TextBox titleTextBox = new TextBox();
	private Button saveButton = new Button();

	public ArticlesDialogBox() {
		articlesListBox.attach(new Observer() {  // uses an anonymous inner class rather than having just one implmentation of the Observer class
			@Override
			public void update(){
				articleSelected();
			}
		});
	}
// more code here
}
```

Lambda Function with Multi-line Code Block
```java
public class ArticlesDialogBox {
	private ListBox articlesListBox = new ListBox();
	private TextBox titleTextBox = new TextBox();
	private Button saveButton = new Button();

	public ArticlesDialogBox() {
		articlesListBox.attach(() -> {
			articleSelected();
			System.out.println("Article Selected:  " + articlesListBox.getContent())
		});
	}

	// more code here
}
```

Lambda expression with single-line code block
```java
public class ArticlesDialogBox {
	private ListBox articlesListBox = new ListBox();
	private TextBox titleTextBox = new TextBox();
	private Button saveButton = new Button();

		public ArticlesDialogBox() {
		articlesListBox.attach(() -> articleSelected()); 
		}

	// more code here
}
```

Method reference operator :: (behaves exactly like a lambda expression, except it uses a direct reference to the method by name rather than providing a delegate to the method)

The are also referred to as event handlers

```java
public class ArticlesDialogBox {
	private ListBox articlesListBox = new ListBox();
	private TextBox titleTextBox = new TextBox();
	private Button saveButton = new Button();

		public ArticlesDialogBox() {
		articlesListBox.attach(this::articleSelected); 
		}

	// more code here
}