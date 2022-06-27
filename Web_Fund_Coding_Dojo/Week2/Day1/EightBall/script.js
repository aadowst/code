var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];


function getAnswer() {
    var index = Math.floor(20 * Math.random());
    var answer = lifesAnswers[index];
    document.querySelector("#answer").innerText = answer;
    
}

function replace1() {
    var ballimage = document.querySelector("#ball");
    ballimage.src = "ball.gif";
    setTimeout(replaceback, 2000);
    
}

function replaceback() {
    var ballimage = document.querySelector("#ball");
    ballimage.src = "ballStill.jpg";
    getAnswer();
    
}

function replace2() {
    var question = document.querySelector("#question").value;
    // var questionValue = question.value;
    if(question ===""){
        document.querySelector("#answer").innerText = "Please ask a question";
    } else {
    var ballimage = document.querySelector("#ball");
    ballimage.src = "ball.gif";
    setTimeout(replaceback(), 1500);

    // replaceback();

    }

}