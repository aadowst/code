// main array and var declaration
// var theDojo = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ];

var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");

var isGameOver = false;


// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    if(isGameOver == false){
        for(var i=0; i<theDojo.length; i++) {
            for(var j=0; j<theDojo[i].length; j++) {
                    result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
            }
        }
    }
    else if(isGameOver == true){
        for(var i=0; i<theDojo.length; i++) {
            for(var j=0; j<theDojo[i].length; j++) {
                    result += `<button class="tatami">`+theDojo[i][j]+`</button>`;

            }
        }
    }
    return result;
}

// game over
function gameOver(){
    isGameOver = true;
    render(theDojo);
    dojoDiv.innerHTML += `<button onclick="location.reload()">restart</button>`;
};

// checker for adjacent & on-tile ninjas
function howMany(i, j, element) {
    if(isGameOver == true){
        return 0;
    }
    if(theDojo[i][j] == 1){
        element.className = "tatami boom";
        gameOver();
    }



    var adjacent = 0;
    console.log({i, j});
    
    if(theDojo[j-1]){
    adjacent += theDojo[i][j-1];
    }

    if(theDojo[j+1]){
    adjacent += theDojo[i][j+1];
    }

    if(theDojo[i-1]){
    adjacent += theDojo[i-1][j];
    }

    if(theDojo[i+1]){
    adjacent += theDojo[i+1][j];
    }

    if(theDojo[i-1] && theDojo[j-1]){
    adjacent += theDojo[i-1][j-1];
    }

    if(theDojo[i-1] && theDojo[j+1]){
    adjacent += theDojo[i-1][j+1];
    }

    if(theDojo[i+1] && theDojo[j-1]){
    adjacent += theDojo[i+1][j-1];
    }

    if(theDojo[i+1] && theDojo[j+1]){
    adjacent += theDojo[i+1][j+1];
    }

    console.log(adjacent);
    element.innerText = adjacent;
}

// random ninjas
function randomNinjaGenerator(){
    var i = 0;
    var j = 0;

    for(w=0; w<10; w++){
        i = Math.floor(Math.random()*10);
        j = Math.floor(Math.random()*10);
        console.log({i,j});

        if(theDojo[i][j] == 1){
            w--;
        }

        theDojo[i][j] = 1;
    }
}



// BONUS CHALLENGES
// 3. if you click on a ninja you must restart the game 
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
randomNinjaGenerator();
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    
