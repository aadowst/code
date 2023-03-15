Commonly used in desktop and mobile apps
Example:  a save button is enabled, if an item is selected (i.e. you've chosen what should be saved), but disabled otherwise

In code, there could be a UIControl class, which is the base for textboxes, lists, buttons, etc.
The subclasses need to be in communication (selecting something in a list should populate the text box and enable the button)

Since the GUI controls are reusable, they shouldn't know anything about the content of each other (how they are used may differ in different parts of the interface. for example, if one menu, the contents might auto-save while in another the button needs to be clicked)

All UIControl classes should talk with an abstract DialogBox class, which could be part of the base UIControl class
When a GUI component is changed, it calls a method in the DialogBox class, which then updates the other components
In an application, a there will be a concrete implementation of the DialogBox class, which will know the specifics about how the other components should be updated

Terminology:
	Mediator:  the abstract class like the DialogBox class
	ConcreteMediator: the implementation of the Mediator, with specific methods for how components should be updated
	Colleague:  an interface/abstract class like the UIControl class
	ConcreteColleague:  a specific implementation of the Colleague (e.g. textbox)

	The ConcreteMediator and ConcreteColleague classes are coupled to each other, which is appropriate.

	*Implementing Mediator Pattern using Observer Pattern*

	The ConcreteMediator can play the role of an observer (and the ConcreteColleagues are its subjects).
	The abstract Colleague class (e.g. UIControl) maintains a list of its observers. When a change is made the ConcreteColleague calls the notifyObservers method of its parent class, which calls the update method on all observers in its list

	It is probably more clear to name the Observer class EventHandler with a method handle() (instead of update)

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