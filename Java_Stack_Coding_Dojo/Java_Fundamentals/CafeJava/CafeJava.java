public class CafeJava {
    public static void main(String[] args){
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        double mochaPrice = 3.50;
        double dripPrice = 2.00;
        double lattePrice = 3.25;
        double cappaccinoPrice = 3.50;

        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";


        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = false;

        
        // System.out.println(generalGreeting + customer1);
        // System.out.println(customer1 + readyMessage);

        // System.out.println(generalGreeting + customer4);
        // if(isReadyOrder4){
        //     System.out.println(customer4 + readyMessage);
        // }
        // else{
        //     System.out.println(customer4 + pendingMessage);
        // }

        // System.out.println(generalGreeting + customer2);
        // if(isReadyOrder2){
        //     System.out.println(customer2 + readyMessage);
        //     System.out.println(customer2 + displayTotalMessage + 2*cappaccinoPrice);
        // }
        // else{
        //     System.out.println(customer2 + pendingMessage);
        // }

        System.out.println(displayTotalMessage + (lattePrice-dripPrice));

    }
}
