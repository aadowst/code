import java.util.ArrayList;
public class TestOrders{
    public static void main(String[] args){
    

    Item item1 = new Item();
    item1.name = "mocha";
    item1.price = 3.50;

    Item item2 = new Item();
    item2.name = "latte";
    item2.price = 3.25;

    Item item3 = new Item();
    item3.name = "drip coffee";
    item3.price = 2.00;

    Item item4 = new Item();
    item4.name = "capuccino";
    item4.price = 3.50;

    Order order1 = new Order();
    order1.name = "Cinhuri";

    Order order2 = new Order();
    order2.name = "Jimmy";

    Order order3 = new Order();
    order3.name = "Noah";

    Order order4 = new Order();
    order4.name = "Sam";

    System.out.println(order2.items);


    order2.items.add(item4);
    order2.total += item4.price;
    System.out.println(order2.items);

    order3.items.add(item3);
    order3.total += item3.price;

    order1.ready=true;

    order4.items.add(item2);
    order4.items.add(item2);
    order4.total += 2*item1.price;

    System.out.printf("Name: %s\n", order4.name);
    System.out.printf("Total: %s\n", order4.total);
    System.out.printf("Ready: %s\n", order4.ready);

    }
}