function accept(id){
    var element = document.querySelector("#" + String(id));
    element.remove();
}

function convertTemp(element){
    console.log(element.value);

    // convert from F to C for high temps 
    const highTemps = document.querySelectorAll(".high-temp");

    for (let i = 0; i< highTemps.length; i++){

        let temp = highTemps[i].innerText;

        temp = temp.slice(0, -1);
        console.log(temp);
        temp = Math.round((temp-32)/1.8);
        console.log(temp);
        temp = String(temp)+ "°";
        console.log(temp);
        highTemps[i].innerText = temp;

    }

    // convert from F to C for low temps 
    const lowTemps = document.querySelectorAll(".low-temp");

    for (let i = 0; i< lowTemps.length; i++){

        let temp = lowTemps[i].innerText;

        temp = temp.slice(0, -1);
        console.log(temp);
        temp = Math.round((temp-32)/1.8);
        console.log(temp);
        temp = String(temp)+ "°";
        console.log(temp);
        lowTemps[i].innerText = temp;

    }
}