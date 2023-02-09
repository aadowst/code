// The array can be declared with the type and its length
string[] fraudulentOrderIDs = new string[3];

// Or the array can be declared and initialized at the same time and the length is known. Note curly braces are used to demark the list
string[] fraudulentOrderIDs = { "A123", "B456", "C789" };

// the .Length property of the array returns its length. The array's length is fixed once declared

// foreach statement loops through each element of an array

string[] names = { "Bob", "Conrad", "Grant" };
foreach (string name in names)
{
    Console.WriteLine(name);
}

// Challenge:  flag all orders that start with "B"

	// Solution:

string[] orderIDs = { "B123",
"C234",
"A345",
"C15",
"B177",
"G3003",
"C235",
"B179"};

foreach (string order in orderIDs)
{
    if(order.StartsWith("B")){
        Console.WriteLine(order);
    }
}