function accept(id){
    var element = document.querySelector("#" + String(id));
    element.remove();
}

function convertTemp(element){

    if(element.value == "C"){
    // convert from F to C for high temps 
    const highTemps = document.querySelectorAll(".high-temp");

    for (let i = 0; i< highTemps.length; i++){
        // cycle through the indexes of highTemps 
        let temp = highTemps[i].innerText;
        temp = temp.slice(0, -1)
        // remove the degree symbol 
        temp = Math.round((temp-32)/1.8)
        // perform conversion 
        temp = String(temp)+ "°"
        // add degree symbol back in 
        highTemps[i].innerText = temp;
        // reassign the innerText at that index of highTemps 

    }

    // convert from F to C for low temps 
    const lowTemps = document.querySelectorAll(".low-temp");

    for (let i = 0; i< lowTemps.length; i++){
        let temp = lowTemps[i].innerText;
        temp = temp.slice(0, -1)
        temp = Math.round((temp-32)/1.8)
        temp = String(temp)+ "°"
        lowTemps[i].innerText = temp;

    }
    }
        // convert from C to F for high temps 
        if(element.value == "F"){
        const highTemps = document.querySelectorAll(".high-temp");

        for (let i = 0; i< highTemps.length; i++){
            let temp = highTemps[i].innerText;
            temp = temp.slice(0, -1);
            temp = Math.round((temp*1.8) + 32);
            temp = String(temp)+ "°";
            highTemps[i].innerText = temp;
    
        }
    
        // convert from F to C for low temps 
        const lowTemps = document.querySelectorAll(".low-temp");
    
        for (let i = 0; i< lowTemps.length; i++){
            let temp = lowTemps[i].innerText;
            temp = temp.slice(0, -1);
            temp = Math.round((temp*1.8) + 32);
            temp = String(temp)+ "°";
            lowTemps[i].innerText = temp;
    
        }
        }

}