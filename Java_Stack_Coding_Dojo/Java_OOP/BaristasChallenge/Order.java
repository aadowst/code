import java.util.ArrayList;
public class Order{
    private String name;
    private boolean ready;
    private ArrayList<Item> items;

    // CONSTRUCTORS
    public Order(){
        this.name = "Guest";
        this.items = new ArrayList<Item>();
    }

    public Order(String name){
        this.name = name;
        this.items = new ArrayList<Item>();
    }

    // METHODS
    public void addItem(Item item){
        setItems(item);
    }

    public String getStatusMessage(){
        if (this.ready) {
            return "Your order is ready.";
        }else{
            return "Thank you for waiting. Your order will be ready soon.";
        }
    }

    public double getOrderTotal(){
        double itemsTotal = 0.0;
        ArrayList<Item> itemsList = getItems();
        for (Item item : itemsList){
            itemsTotal += item.getPrice();
        }
        return itemsTotal;
    }

    // OPTION 2

    // public double getOrderTotal(){
    //     double itemsTotal = 0.0;
    //     ArrayList<Item> itemsList = getItems();
    //     for (int i = 0; i< itemsList.size(); i++){
    //         itemsTotal += itemsList.get(i).getPrice();
    //     }
    //     return itemsTotal;
    // }

    public void display(){
        ArrayList<Item> itemsList = getItems();
        System.out.println("Customer Name: " + this.name);
            for (Item item : itemsList){
            System.out.println(item.getName() + "  -  " + item.getPrice());
        }
        System.out.println("Total:  " + getOrderTotal());
    }

        // GETTERS AND SETTERS
    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public boolean getReady(){
        return ready;
    }

    public void setReady(boolean ready){
        this.ready = ready;
    }

    public ArrayList getItems(){
        return items;
    }

    public void setItems(Item item){
        this.items.add(item);
    }
}