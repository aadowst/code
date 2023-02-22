// Variable name rules:
	// can only contain alphanumeric characters and undersign.
	// must begin with a letter or underscore (not a number)
	// must not be reserved keywords
	// are case-sensitive

// Variable name conventions:
	// use came case
	// should be 1+ words, not contractions
	// don't include data type in the name (ex. don't use string strMyValue)

// Note:  fields (public vs. private), classes and methods have their own naming conventions

// Suggestion:  reserve comments for heigher-level ideas (vs. explanations of individual lines)

// Whitespace guide:
	// each command belongs on a separate line
	// single lines of code can be broken up, but avoid unneccessary splitting
	// leave a space before and after =
	// leave blank lines between different sections of code

// Note:  curly braces should be on their own lines

// Challenge Solution:

// Determines how many times 'o' appears in a message, reverses the message and displays reversed message and count

string originalString = "The quick brown fox jumps over the lazy dog.";

char[] charMessage = originalString.ToCharArray();

int letterCount = 0;

foreach (char letter in charMessage) 
{
  if (letter == 'o') 
  {
    letterCount++; 
  }
}

Array.Reverse(charMessage);
string new_message = new String(charMessage);

Console.WriteLine(new_message);
Console.WriteLine($"'o' appears {letterCount} times.");