function alertMe(element){
    element.innerText = "Logout"
}

var btn = document.getElementById("btn");

function disablebtn(){
    document.getElementById("btn").disabled = true;
    alert("button has been disabled!!");
}