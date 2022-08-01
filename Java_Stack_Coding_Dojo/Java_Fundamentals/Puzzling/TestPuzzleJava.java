import java.util.ArrayList;
import java.util.Random;
public class TestPuzzleJava {
    
	public static void main(String[] args) {
		PuzzleJava generator = new PuzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);
		
        char letter = generator.getRandomLetter();
        System.out.println(letter);

        String password = generator.generatePassword();
        System.out.println(password);

        System.out.println(generator.getNewPasswordSet(6));

        String[] myArray = {"hello", "darkness", "my", "old", "friend"};
        String[] newArray = generator.shuffleArray(myArray);
        for(String word : newArray){
        System.out.println(word);

        }
	}
}
