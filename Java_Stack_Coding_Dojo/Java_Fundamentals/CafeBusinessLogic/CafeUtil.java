import java.util.ArrayList;
import java.util.Arrays;
import java.text.*;

public class CafeUtil{

    public int getStreakGoal(){
        int sum = 0;
        int weeks = 10;
        for(int i = 0; i <= weeks; i++){
            sum = sum + i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices){
        int total = 0;
        for(double item : prices){
            total += item;
        }
        return total;
    }

    public void displayMenu(ArrayList<String> menuItems){
        for(int i=0; i<menuItems.size(); i++){
            System.out.println(i + " " + menuItems.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please enter your name:  ");
        String userName = System.console().readLine();
        System.out.printf("Hello, %s!", userName);
        System.out.println("\nThere are " + customers.size()+ " people in front of you");
        customers.add(userName);
        for(String name: customers){
            System.out.println(name);
        }
    }

    public void printPriceChart(String product, double price, int maxQuantity){
        System.out.println(product);
        int i = 1;
        while(i < maxQuantity){
            double extendedPrice = (i * price)-((i-1)*.5);
            System.out.printf("%d - $%.2f%n", i, extendedPrice);
            i++;
        }
    }
}