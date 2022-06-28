console.log("page loaded...");

function editProfile(){
    document.getElementById("username").innerText = "Wonder Kid";
}


function removeRequest(id){
    var requestCount = document.querySelector("#connections-requests").innerText;
    requestCount = Number(requestCount);
    requestCount--;
    document.querySelector("#connections-requests").innerText = requestCount;
    id.remove();
}

function accept(id){
    var myConnections = document.querySelector("#my-connections").innerText;
    myConnections = Number(myConnections);
    myConnections++;
    document.querySelector("#my-connections").innerText = myConnections;
    removeRequest(id);
}