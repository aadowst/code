// Given #1
console.log(hello);                                   
var hello = 'world';                                 

// Rewritten
var hello;
console.log(hello);  //error: undefined
hello = 'world';

// Given #2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// Rewritten
var needle;
needle= 'haystack';
function test() {
    var needle;
    needle = 'magnet';
    console.log(needle);
}
test();


// Given #3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Rewritten
var brendan;
brendan = 'super cool';
function print(){ //never called
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //output = 'super cool'

// Given #4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


//Rewritten
var food;
food = "chicken";
console.log(food); //output = 'chicken'
function eat(){
    var food; 
    food = 'half-chicken';
    console.log(food); //output = 'half-chicken'
    food = 'gone';
}
eat();

//Given #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//Rewritten
var mean;
mean(); //error because mean is not a function

//Given #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);



//Rewritten
var genre;
console.log(genre);  //output = undefined
genre = "disco";
function rewind(){
    var genre;
    genre = "rock";
    console.log(genre); //output = 'rock'
    genre = "r&b";
    console.log(genre); //output = 'r&b'
}
rewind();
console.log(genre); //output = 'disco';

//Given #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Rewritten
var dojo;
dojo= "san jose";
console.log(dojo); //output = "san jose"
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo); //output = "seattle"
    var dojo = "burbank";
    console.log(dojo); //output = "burbank"
}
console.log(dojo); //output = san jose

//Bonus Given
console.log(makeDojo("Chicago", 65)); //dojo = {name: "Chicago", students: 65, hiring: true}
console.log(makeDojo("Berkeley", 0)); //throws an error since dojo is a const and can't be reassigned in else if block
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";  
    }
    return dojo;
}

