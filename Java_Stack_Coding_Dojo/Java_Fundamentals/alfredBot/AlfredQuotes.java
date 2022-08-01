
import java.text.*;
import java.util.*;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        String guestGreetingString = String.format("Hello %s, lovely to see you. How are you?", name);
        return guestGreetingString;
    }
    
    public String dateAnnouncement() {
        Date currentDate = new Date();
        return "The current date is " + currentDate;
    }
    
    public String respondBeforeAlexis(String conversation) {
        int alexisIndex = conversation.indexOf("Alexis");
        int alfredIndex = conversation.indexOf("Alfred");
        String responseString;
        if (alexisIndex !=-1){
            responseString = "Right away, sir. She certainly isn't sophisticated enough for that.";
        }
        else if(alfredIndex !=-1){
            responseString = "At your service. As you wish, naturally";
        }
        else{
            responseString = "Right. And with that I shall retire.";
        }
        return responseString;
    }
    
	// NINJA BONUS
    public String guestGreeting(String name, Boolean hungry) {
        String wantFoodString;
        if (hungry){
            wantFoodString = "Shall I fetch you something to eat?";
        }else{
            wantFoodString = "Glad you ate before arriving.";
        }
        String guestGreetingString = String.format("Hello %s, lovely to see you. %s", name, wantFoodString);
        return guestGreetingString;
    }

    public String guestGreeting() {
        String timeOfDay;
        
        if (hungry){
            wantFoodString = "Shall I fetch you something to eat?";
        }else{
            wantFoodString = "Glad you ate before arriving.";
        }
        String guestGreetingString = String.format("Hello %s, lovely to see you. %s", name, wantFoodString);
        return guestGreetingString;
    }

    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}

