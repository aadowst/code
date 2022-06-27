
count = 0;

// Original function (hard coded the id of the h2 as likeCount)
// function addLike(element){
//     var likeCounter = document.querySelector("#likeCount");
//     // is there a get id of element method?
//     count++;
//     likeCounter.innerText = count + " like(s)"
//     // console.log(count);
// }


function addLike(element){
    var elementId = element.id;
    console.log(elementId);
    count++;
    var element = document.getElementById(elementId);
    element.innerText = count + " like(s)"
}
