
count = 0;

// VERSION 1: hard coded the id of the h2 as likeCount

// function addLike(element){
//     var likeCounter = document.querySelector("#likeCount");
//     // is there a get id of element method?
//     count++;
//     likeCounter.innerText = count + " like(s)"
//     // console.log(count);
// }


// VERSION 2: gets the id of the button and then modifies the innerText of the h2 that has the same id 

// function addLike(element){
//     var elementId = element.id;
//     console.log(elementId);
//     count++;
//     var element = document.getElementById(elementId);
//     element.innerText = count + " like(s)"
// }


// VERSION 3:  uses array to store separate counts

countArray=[0,0,0]
function addLike(element){
    var elementId = element.id;
    console.log(elementId);
    countArray[elementId]++;
    console.log(countArray[elementId])
    var element = document.getElementById(elementId);
    element.innerText = countArray[elementId] + " like(s)"
}

// Colby suggested I make an array of the User Ids and have the function look up the user id based on that.