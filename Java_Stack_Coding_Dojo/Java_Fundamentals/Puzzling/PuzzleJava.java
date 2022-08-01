import java.util.ArrayList;
// import java.util.Array;
import java.util.Random;


public class PuzzleJava{
Random randomizer = new Random();

    public ArrayList getTenRolls(){
    ArrayList<Integer> tenRolls = new ArrayList<Integer>();
    for (int i = 1; i <=10; i++){
    int roll = randomizer.nextInt(20) + 1;
    tenRolls.add(roll);
    }
    return tenRolls;
    }

    char[] alphabetArray = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

    public char getRandomLetter(){
        int index = randomizer.nextInt(25);
        char letter = alphabetArray[index];
        return letter;
    }

    public String generatePassword(){
        String password = String.format("%s%s%s%s%s%s%s%s", getRandomLetter(), getRandomLetter(), getRandomLetter(), getRandomLetter(), getRandomLetter(), getRandomLetter(), getRandomLetter(), getRandomLetter());
        return password;
    }

    public ArrayList getNewPasswordSet(int length){
        ArrayList<String> passwordSet = new ArrayList<String>();
        int i = 1;
        while (i<= length){
            passwordSet.add(generatePassword());
            i++;
        }
        return passwordSet;
    }

    public String[] shuffleArray(String[] input){
        String[] shuffledArray = input;
        for(int i = 0; i<1000; i++){
            int oneIndex = randomizer.nextInt(shuffledArray.length);
            int anotherIndex = randomizer.nextInt(shuffledArray.length);
            String temp = shuffledArray[oneIndex];
            shuffledArray[oneIndex] = shuffledArray[anotherIndex];
            shuffledArray[anotherIndex] = temp;
        }
        return shuffledArray;
    }
}