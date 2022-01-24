console.log("hey it's me!");

var count = 0;

function alertMe(element){
    count++;
    element.innerText = "clicked x" + count;
}

function hoverOver(){
    console.log("hovered!!");
}