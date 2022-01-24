var like = document.querySelector("#heart_likes");

var likecount = 0;

function changeText() {
    likecount = likecount + 1;
    like.innerText = likecount;
}

var like2 = document.querySelector("#heart_likes2");

var likecount1 = 0;

function changeText2() {
    likecount1 = likecount1 + 1;
    like2.innerText = likecount1;
}

var like1 = document.querySelector("#heart_likes1");

var likecount2 = 0;

function changeText1() {
    likecount2 = likecount2 + 1;
    like1.innerText = likecount2;
}

function hide(el) {
    el.remove();
}

var searchbar = document.querySelector("#search");

function alertMe() {
    alert("You are searching for " +searchbar.value);
}

