import java.util.Random;
import java.lang.Math;

public class BankAccount{
    private double checkingBalance;
    private double savingsBalance;
    private static int numberOfAccountsCreated = 0;
    private static double totalMoneyStored = 0.0;
    private double accountNumber;

    // CONSTRUCTOR
    public BankAccount(double checkingBalance, double savingsBalance){
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        this.accountNumber = generateAccountNumber();
        numberOfAccountsCreated +=2;
        totalMoneyStored += checkingBalance + savingsBalance;

    }

    //  METHODS

    Random randomizer = new Random();
    private double generateAccountNumber(){
        double number = Math.round(randomizer.nextDouble()*1000000000);
        System.out.println(number);
        return number;
    }

    public void displayAccountNumber(){
        System.out.println(this.accountNumber);
    }

    public void depositMoney(String accountType, double deposit){
        if(accountType=="checking"){
            this.checkingBalance += deposit;
            increaseTotalMoneyStored(deposit);
        }else if(accountType=="savings"){
            this.savingsBalance += deposit;
            increaseTotalMoneyStored(deposit);
        }else{
            System.out.println("please specify 'checking' or 'savings'.");
        }
    }

    public void withdrawMoney(String accountType, double withdrawal){
        if(accountType=="checking"){
            if (this.checkingBalance > withdrawal){
                this.checkingBalance -= withdrawal;
                increaseTotalMoneyStored(-1*withdrawal);
            }else{
                System.out.println("Request exceeds available balance.");
            }
        }else if(accountType=="savings"){
            if (this.savingsBalance > withdrawal){
                this.savingsBalance -= withdrawal;
                increaseTotalMoneyStored(-1*withdrawal);
            }else{
                System.out.println("Request exceeds available balance.");
            }
        }else{
            System.out.println("please specify 'checking' or 'savings'.");
        }
    }

    public double getAllBalances(){
        return this.savingsBalance + this.checkingBalance;
    }

    public static void increaseTotalMoneyStored(double deposit){
        totalMoneyStored += deposit;
    }

    public static void getNumberOfAccountsCreated(){
        System.out.println(numberOfAccountsCreated);
    }

    public static void getTotalMoneyStored(){
        System.out.println(totalMoneyStored);
    }


    // GETTERS AND SETTERS
    public double getCheckingBalance(){
        return checkingBalance;
    }

    public double getSavingsBalance(){
    return savingsBalance;
}

}