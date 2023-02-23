public class User {
	// Fields
	public String name;  // generally a bad practice to make fields public

	// Constructor
	public User(String name){
		this.name = name;
	}

	// Methods
	public void sayHello(){
		System.out.println("Hello, my name is " + name);
	}
}
