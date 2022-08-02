import java.util.ArrayList;
public class TestOrders{
    public static void main(String[] args){
    
    Order order1 = new Order();
    Order order2 = new Order();
    
    Order order3 = new Order("Clara");
    Order order4 = new Order("Davis");
    Order order5 = new Order("Elana");

    System.out.println(order1.getName());

    System.out.println(order3.getName());
    System.out.println(order4.getName());


    Item item1 = new Item("mocha",3.50);
    Item item2 = new Item("latte", 3.25);
    Item item3 = new Item("drip coffee", 2.00);
    Item item4 = new Item("capuccino", 3.50);

    order1.addItem(item2);
    order1.addItem(item2);
    order2.addItem(item1);
    order2.addItem(item2);
    order3.addItem(item2);
    order3.addItem(item3);
    order4.addItem(item3);
    order4.addItem(item4);
    order5.addItem(item1);
    order5.addItem(item2);
    order5.addItem(item3);
    order5.addItem(item4);

    System.out.println(order2.getStatusMessage());
    order2.setReady(true);
    System.out.println(order2.getStatusMessage());

    System.out.print(order2.getOrderTotal());
    System.out.println();
    order3.display();
    }
}