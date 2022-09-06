//Goal:  Rewrite the synchronous function below into on that is asynch.
function tossCoin(){
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );

function fiveHeadsAsync(){
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5 && attempts <100) {
            attempts++;
            let result = tossCoin();
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if(headsCount >=5){
            resolve(`It took ${attempts} tries to flip five "heads"`)
        }else{
            reject("it took more than 100 attempts")
        }
    });
}
fiveHeadsAsync()
.then( res => console.log(res))
.catch(err => console.log(err))

console.log("end of code");