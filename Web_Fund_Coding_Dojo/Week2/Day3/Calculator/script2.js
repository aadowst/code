var display = document.getElementById("display");
var numbersEntered = [];
var numberString = "";
var numbersNumber;
var operatorType = "";
var calculationPerformed = false;

function clearCalculator(){
    numbersEntered = [];
    numberString = "";
    numbersNumber = "";
    display.innerText = 0;
    operatorType = "";
    calculationPerformed = false;
}

function calculate(){
    var temp;
    if(numbersEntered.length <= 0){
        return;
    }else if (operatorType == "+"){
        temp = numbersEntered[0]+numbersEntered[1];
        numbersEntered =[temp];
        display.innerText = numbersEntered;
        
    }else if (operatorType == "-"){
        temp = numbersEntered[0]-numbersEntered[1];
        numbersEntered =[temp];
        display.innerText = numbersEntered;
        
    }else if (operatorType == "*"){
        temp = numbersEntered[0]*numbersEntered[1];
        numbersEntered =[temp];
        display.innerText = numbersEntered; 
        
    }else if (operatorType = "/"){
        temp = numbersEntered[0]/numbersEntered[1];
        numbersEntered =[temp];
        display.innerText = numbersEntered;
    }

    if(calculationPerformed == false){
        operatorType = "";
    }
    calculationPerformed = true;
    c();
    // can i send the operatorType as an argument for the function and have it do math using the operator type (i.e. will the operatorType be a string or not?)
}

function setOP(type){
    if(numbersEntered.length == 0){
        return;
    } else if (numbersEntered.length == 1){
        operatorType = type;
        numberString = "";
        numbersEntered.push("");
    }else {
        calculate();
        operatorType = type;
    }
    c();
}

function press(digit){
    if(numbersEntered.length==0){
        numberString = String(digit);
        numbersEntered.push(digit);
        display.innerText = digit;
    }else if (numbersEntered.length == 1 && calculationPerformed ==true && operatorType==""){
        clearCalculator();
        press(digit);

    }else if(numbersEntered.length ==1 && calculationPerformed ==true){
        numberString="";
        numbersEntered.push("");
        calculationPerformed = false;
        concatAndPush(digit);
    }else{
        concatAndPush(digit);
    }
    c();
}

function concatAndPush(digit){
    var i = numbersEntered.length-1;
        numberString += String(digit);
        numbersNumber = Number(numberString);
        numbersEntered[i] = numbersNumber;
        display.innerText = numbersNumber;
    }

    function c(){
        console.log("numberString is: " + numberString);
        console.log("numbersNumber is: " + numbersNumber);
        console.log("operatorType is: " + operatorType);
        console.log("numbersEntered is: " + numbersEntered);
        console.log("numbersEntered.length is: " + numbersEntered.length);
        console.log("calculationsPerformed is: " + calculationPerformed)
        console.log("---------------------------------------------------");
        }
        