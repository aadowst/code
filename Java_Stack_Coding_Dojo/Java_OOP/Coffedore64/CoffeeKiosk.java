import java.util.ArrayList;

public class CoffeeKiosk{
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    // CONSTRUCTOR
    public CoffeeKiosk(){
        menu = new ArrayList<Item>();
        orders = new ArrayList<Order>();
    }
    //  METHODS

    public void addMenuItem(String name, double price){
        Item item = new Item(name, price);
        menu.add(item);
        int index = menu.size() -1;
        item.setIndex(index);
    }

    public void displayMenu(){
        for(Item item : menu){
            System.out.printf("%s %s -- $%.2f%n", item.getIndex(), item.getName(), item.getPrice());
        }
    }

    public void newOrder() {
        
    	// Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
    
    	// Your code:
        // Create a new order with the given input string
        Order order = new Order(name);
        // Show the user the menu, so they can choose items to add.
        displayMenu();

    	// Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        
        // Write a while loop to collect all user's order items
        while(!itemNumber.equals("q")) {
            
            // Get the item object from the menu, and add the item to the order
            order.addItem(menu.get(Integer.parseInt(itemNumber)));
            // Ask them to enter a new item index or q again, and take their input
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }
        // After you have collected their order, print the order details 
        order.display();
    	// as the example below. You may use the order's display method.
        
    }


    // GETTERS AND SETTERS
    public ArrayList getMenu(){
        return menu;
    }

    public void setMenu(Item item){
        this.menu.add(item);
    }

    public ArrayList getOrders(){
        return orders;
    }

    public void setMenu(Order order){
        this.orders.add(order);
    }
}